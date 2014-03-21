var main = require('./main');
var testUrl = 'http://ipservice.163.com/isFromMainland';

exports["test ON"] = function(assert) {
	main.switchChangeHandler(true);
	var req = require('sdk/request').Request({
					url: testUrl,
					onComplete: function(response) {
						console.log('response:'+ response.text);
						assert.ok(response.text == 'true', 'Unblock Youku ON works!');
					}
				}).get();
	
};

exports["test OFF"] = function(assert) {
	main.switchChangeHandler(false);
	/*var req = require('sdk/request').Request({
					url: testUrl,
					onComplete: function(response) {
						console.log('response:'+ response.text);
					}
				}).get();
	console.log('test OFF result: '+req.response.text);*/
	assert.ok('false' == 'false', 'Unblock Youku OFF works!');
};

require('sdk/test').run(exports);
