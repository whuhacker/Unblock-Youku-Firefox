var Tools = require("./tools");
var Urls = require("./urls");
var pref = require('sdk/preferences/service');

const {Cc,Ci} = require("chrome");

var getHttpRequestObserver = function(urllist) {
  return {
    // modify http request headers on specific websites
    observe: function(subject, topic, data) {
      if (topic == 'http-on-modify-request') {
        var httpChannel = subject.QueryInterface(Ci.nsIHttpChannel);
        //console.log(subject.URI.host);
        var proxyStatus = false;
        if(pref.get('network.proxy.type') === 2) {
	  proxyStatus = true;
        }
        if( proxyStatus && (
	    /xiami\.com/.test(subject.URI.host) ||
	    /ku6\.com/.test(subject.URI.host) ||
	    /kandian\.com/.test(subject.URI.host) ||
	    /web-play\.pptv\.com/.test(subject.URI.host) ||
	    /web-play\.pplive\.cn/.test(subject.URI.host) ||
	    /ac\.qq\.com/.test(subject.URI.host) ||
	    /ssports\.com/.test(subject.URI.host) ||
	    /bilibili\.com/.test(subject.URI.host) ||
	    /live\.gslb\.letv\.com/.test(subject.URI.host)
        )) {
          // test subject.URL.host on modify_header_urls
          var fakeIp = Tools.new_random_ip();
	  httpChannel.setRequestHeader('X-Forwarded-For', fakeIp, false);
	  httpChannel.setRequestHeader('Client-IP', fakeIp, false);
        }
      }
    },

    get observerService() {
      return Cc['@mozilla.org/observer-service;1']
        .getService(Ci.nsIObserverService);
    },

    register: function() {
      this.observerService.addObserver(this, 'http-on-modify-request', false);
    },

    unregister: function() {
      this.observerService.removeObserver(this, 'http-on-modify-request');
    }
  };
};

var setup_header = function() {
  var normal_header_urls = Urls.common_urls.concat(Urls.chrome_extra_urls);
  var ob = getHttpRequestObserver(normal_header_urls);
  ob.register();
};

var setup_extra_header = function() {
  var extra_header_urls = Urls.header_extra_url_list;
  var ob = getHttpRequestObserver(extra_header_urls);
  ob.register();
};
