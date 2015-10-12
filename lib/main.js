var ui = require("./ui");
exports.switchChangeHandler = ui.switchChangeHandler; // used by test

// inject js for specific websites
var page_mod = require("./page_mod");

// modify HTTP request headers on target websites
var header_mod = require("./header_mod");
header_mod.setup_header();
header_mod.setup_extra_header();

// setup pac proxy for target websites
var pref = require('sdk/preferences/service');
var self = require('sdk/self');

// setup pac
var Tools = require("./tools");
var Urls = require("./urls");
var proxy_server_proc = 'HTTPS';
var proxy_server_addr = 'secure.uku.im:993';
var backup_proxy_server_proc = 'HTTPS';
var backup_proxy_server_addr = 'proxy.mainland.io:993';
var pac = Tools.urls2pac([], Urls.url_normal_list,
                         proxy_server_proc, proxy_server_addr,
                         backup_proxy_server_proc,
                         backup_proxy_server_addr);
var pacFile = "data:text/javascript," + encodeURIComponent(pac);

// add hooks to use proxy
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
