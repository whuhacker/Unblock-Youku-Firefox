addon.port.on('show',function(proxyStatus){
//$(document).ready(function(){
	if(proxyStatus) {
		$('#switch-change').attr('checked', true);
	} else {
		$('#switch-change').attr('checked', false);
	}
	$('#switch-change').bootstrapSwitch();
	$('#switch-change').on('switchChange', function (e, data) {
		var $element = $(data.el);
		var value = data.value;
		addon.port.emit('switchChange', value);

		console.log(e, $element, value);
	});
});
addon.port.on('hide',function(){
	$('#switch-change').off('switchChange');
	$('#switch-change').bootstrapSwitch('destroy');
});