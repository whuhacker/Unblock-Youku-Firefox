var pref = require('sdk/preferences/service');
var _ = require('sdk/l10n').get;
var widgets = require('sdk/widget');
var pageMod = require('sdk/page-mod');
var self = require('sdk/self');

var pacFile = self.data.url('proxy.pac');

var optionsPanel = require('sdk/panel').Panel({
	width: 200,
	height: 160,
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
	include: 'http://www.tudou.com/*',
	contentScriptWhen: 'end',
	contentScriptFile: self.data.url('content/tudou.js')
});
pageMod.PageMod({
	include: 'http://play.baidu.com/*',
	contentStyleFile: self.data.url('content/play.baidu.css')
});

var widget = widgets.Widget({
	id: 'unblock-youku',
	label: 'Unblock Youku',
	contentURL: self.data.url('icons/icon16.png'),
	panel: optionsPanel 
});

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