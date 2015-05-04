_.bind = function(func, obj, arg) {
	return func.call(obj, arg);
};