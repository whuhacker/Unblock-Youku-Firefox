var pref = require("sdk/preferences/service");
var pacFile = "http://yo.uku.im/proxy.pac";

var _ = require("sdk/l10n").get;
var widgets = require("sdk/widget");
var self = require("sdk/self");
var optionsPanel = require("sdk/panel").Panel({
	width: 150,
	height: 100,
	contentURL: self.data.url("options.html"),
	onShow: function() {
		console.info(_("options_title") + ' opened.');
		optionsPanel.port.emit('show');
		optionsPanel.port.on('switchChange', switchChangeHandler);
	},
	onHide: function() {
		optionsPanel.port.emit('hide');
		optionsPanel.port.removeListener('switchChange', switchChangeHandler);
	}
});

function switchChangeHandler(value){
	console.log(value);
	if(value === true) {
		pref.set('network.proxy.type', 2);
	} else if(value === false) {
		pref.set('network.proxy.type', 5);
	}
};

var widget = widgets.Widget({
	id: "unblock-youku",
	label: "Unblock Youku",
	contentURL: self.data.url("icons/icon16.png"),
	panel: optionsPanel 
});

pref.set('network.proxy.autoconfig_url', pacFile);
pref.set('network.proxy.type', 2);