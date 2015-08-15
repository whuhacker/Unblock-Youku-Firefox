var pref = require('sdk/preferences/service');
var _ = require('sdk/l10n').get;
var { ToggleButton } = require('sdk/ui/button/toggle');
var pageMod = require('sdk/page-mod');
var self = require('sdk/self');

var pacFile = self.data.url('proxy.pac');

var button = ToggleButton({
	id: 'unblock-youku',
	label: 'Unblock Youku',
	icon: {
		"16": self.data.url('icons/icon16.png'),
		"48": self.data.url('icons/icon48.png'),
		"64": self.data.url('icons/icon64.png'),
		"128": self.data.url('icons/icon128.png')
	},
	onChange: function(state) {
		if(state.checked) {
			optionsPanel.show({
				position: button
			});
		}
	} 
});

var optionsPanel = require('sdk/panel').Panel({
	width: 200,
	height: 170,
	contentURL: self.data.url('options.html'),
	onShow: function() {
		console.info(_('options_title') + ' opened.');
		var proxyStatus = false;
		if(pref.get('network.proxy.type') === 2) {
			proxyStatus = true;
		}
		optionsPanel.port.emit('show', proxyStatus);
		optionsPanel.port.on('switchChange', switchChangeHandler);
	},
	onHide: function() {
		optionsPanel.port.emit('hide');
		optionsPanel.port.removeListener('switchChange', switchChangeHandler);
		button.state('window', { checked: false });
	}
});

exports.switchChangeHandler = switchChangeHandler;
function switchChangeHandler(value){
	console.log(value);
	if(value === true) {
		pref.set('network.proxy.type', 2);
	} else if(value === false) {
		pref.set('network.proxy.type', 5);
	}
};


pageMod.PageMod({
	include: 'http://music.163.com/*',
	contentScriptWhen: 'end',
	contentScriptFile: self.data.url('content/music.163.js'),
    attachTo: ["existing", "top", "frame"]
});
pageMod.PageMod({
	include: 'http://www.tudou.com/*',
	contentScriptWhen: 'ready',
	contentScriptFile: self.data.url('content/tudou.js')
});
pageMod.PageMod({
	include: 'http://play.baidu.com/*',
	contentStyleFile: self.data.url('content/play.baidu.css')
});

const {Cc,Ci} = require("chrome");
var httpRequestObserver = {
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
				var fakeIp = '220.181.111.';
				fakeIp += Math.floor(Math.random() * 254 + 1); // 1 ~ 254
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
httpRequestObserver.register();

exports.main = function(options, callbacks) {
	switch(options.loadReason) {
		case 'install':
		case 'enable':
			pref.set('network.proxy.autoconfig_url', pacFile);
			pref.set('network.proxy.type', 2);
			break;
		case 'startup':
		case 'upgrade':
		case 'downgrade':
		default:
			break;
	}
}

// Due to bug 627432, this listener will never be called with 'uninstall', it will only be called with 'disable'.
// See https://bugzilla.mozilla.org/show_bug.cgi?id=627432 
exports.onUnload = function(reason) {
	switch(reason) {
		case 'uninstall':
		case 'disable':
			pref.set('network.proxy.type', 5);
			break;
		case 'shutdown':
		case 'upgrade':
		case 'downgrade':
			break;
	}
}
