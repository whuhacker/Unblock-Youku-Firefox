addon.port.on('show',function(){
//$(document).ready(function(){
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