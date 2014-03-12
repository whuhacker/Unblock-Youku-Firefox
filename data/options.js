addon.port.on('show',function(arg){
//$(document).ready(function(){
	$('[name="enabled"]').bootstrapSwitch();
	$('#switch-change').on('switchChange', function (e, data) {
		var $element = $(data.el);
		var value = data.value;

		console.log(e, $element, value);
	});
});