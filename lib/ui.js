var self = require('sdk/self');
var pref = require('sdk/preferences/service');
var _ = require('sdk/l10n').get;

var optionsPanel = require('sdk/panel').Panel({
        width: 200,
        height: 100,
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
function switchChangeHandler(value){
        console.log(value);
        if(value === true) {
                pref.set('network.proxy.type', 2);
        } else if(value === false) {
                pref.set('network.proxy.type', 5);
        }
};
var { ToggleButton } = require('sdk/ui/button/toggle');
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

exports.switchChangeHandler = switchChangeHandler; // used by test
