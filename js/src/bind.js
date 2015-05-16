/** 
 * _.bind(function, object, *arguments) 
 *
 * Bind a function to an object, meaning that whenever 
 * the function is called, the value of this will be 
 * the object. Optionally, pass arguments to the function 
 * to pre-fill them, also known as partial application. 
 * For partial application without context binding, 
 * use partial.
 *
*/

_.bind = function(func, obj, arg){
	if (arguments.length > 3) {
		arg = Array.prototype.slice.call(arguments, 2);
		return function() {
				return func.apply(obj, arg);
		}
	} else {
		return function() {
			return func.call(obj, arg);
		}
	}

}