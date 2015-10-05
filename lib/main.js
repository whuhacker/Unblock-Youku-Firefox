var ui = require("./ui");
exports.switchChangeHandler = ui.switchChangeHandler; // used by test

var page_mod = require("./page_mod");

var pref = require('sdk/preferences/service');

var header_mod = require("./header_mod");

var url2pac = require("./url2pac");

// var self = require('sdk/self');

// var pacFile = self.data.url('proxy.pac');

// const {Cc,Ci} = require("chrome");
// var httpRequestObserver = {
//   // modify http request headers on specific websites
// 	observe: function(subject, topic, data) {
// 		if (topic == 'http-on-modify-request') {
// 			var httpChannel = subject.QueryInterface(Ci.nsIHttpChannel);
// 			//console.log(subject.URI.host);
// 			var proxyStatus = false;
// 			if(pref.get('network.proxy.type') === 2) {
// 				proxyStatus = true;
// 			}
// 			if( proxyStatus && (
// 				/xiami\.com/.test(subject.URI.host) || 
// 				/ku6\.com/.test(subject.URI.host) || 
// 				/kandian\.com/.test(subject.URI.host) ||
// 				/web-play\.pptv\.com/.test(subject.URI.host) ||
// 				/web-play\.pplive\.cn/.test(subject.URI.host) ||
// 				/ac\.qq\.com/.test(subject.URI.host) ||
// 				/ssports\.com/.test(subject.URI.host) ||
// 				/bilibili\.com/.test(subject.URI.host) ||
// 				/live\.gslb\.letv\.com/.test(subject.URI.host)
// 			)) {
// 				var fakeIp = '220.181.111.';
// 				fakeIp += Math.floor(Math.random() * 254 + 1); // 1 ~ 254
// 				httpChannel.setRequestHeader('X-Forwarded-For', fakeIp, false);
// 				httpChannel.setRequestHeader('Client-IP', fakeIp, false);
// 			}
// 		}
// 	},

// 	get observerService() {
// 		return Cc['@mozilla.org/observer-service;1']
// 		.getService(Ci.nsIObserverService);
// 	},

// 	register: function() {
// 		this.observerService.addObserver(this, 'http-on-modify-request', false);
// 	},

// 	unregister: function() {
// 		this.observerService.removeObserver(this, 'http-on-modify-request');
// 	}
// };
// httpRequestObserver.register();

// exports.main = function(options, callbacks) {
// 	switch(options.loadReason) {
// 		case 'install':
// 		case 'enable':
// 			pref.set('network.proxy.autoconfig_url', pacFile);
// 			pref.set('network.proxy.type', 2);
// 			break;
// 		case 'startup':
// 		case 'upgrade':
// 		case 'downgrade':
// 		default:
// 			break;
// 	}
// }

// // Due to bug 627432, this listener will never be called with 'uninstall', it will only be called with 'disable'.
// // See https://bugzilla.mozilla.org/show_bug.cgi?id=627432
// exports.onUnload = function(reason) {
// 	switch(reason) {
// 		case 'uninstall':
// 		case 'disable':
// 			pref.set('network.proxy.type', 5);
// 			break;
// 		case 'shutdown':
// 		case 'upgrade':
// 		case 'downgrade':
// 			break;
// 	}
// }
