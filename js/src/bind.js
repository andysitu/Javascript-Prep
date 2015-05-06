_.bind = function((func, obj, arg){
	var mes = "HI";
	var obj = obj;
	var func = func;
	var arg = arg;
	
	function funk() {
		// funk doesn't save local scope, only one above with closure
		console.log(mes, func, obj, arg);
		func.call(obj, arg);
	}
	return funk;
}