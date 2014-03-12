var pref = require("sdk/preferences/service");
var pacFile = "http://yo.uku.im/proxy.pac";


var widgets = require("sdk/widget");
var self = require("sdk/self");
var optionsPanel = require("sdk/panel").Panel({
	width: 200,
	height: 100,
	contentURL: self.data.url("options.html"),
	contentScriptFile: self.data.url("options.js")
});

var widget = widgets.Widget({
	id: "unblock-youku",
	label: "Unblock Youku",
	contentURL: self.data.url("icon16.png"),
	panel: optionsPanel 
});

pref.set('network.proxy.autoconfig_url', pacFile);
pref.set('network.proxy.type', 2);