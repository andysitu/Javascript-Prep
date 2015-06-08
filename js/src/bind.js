/* _.bind(function, object, *arguments) 
 * Bind a function to an object, meaning that whenever 
 * the function is called, the value of this will be 
 * the object. Optionally, pass arguments to the function 
 * to pre-fill them, also known as partial application. 
 * For partial application without context binding, use partial.
*/

_.bind = function(funct, obj) {
	var arg = Array.prototype.splice.call(arguments, 2)
	return function() {
		return funct.apply(obj, arg);
	};
};