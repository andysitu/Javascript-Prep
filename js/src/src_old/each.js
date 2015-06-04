/**
 * @method each
 * @desc
 * Iterates over a list of elements, yielding each 
 * in turn to an iteratee function. The iteratee 
 * is bound to the context object, if one is passed. 
 * Each invocation of iteratee is called with three 
 * arguments: (element, index, list). If list is a 
 * JavaScript object, iteratee's arguments will be (value, key, list). 
 * Returns the list for chaining.
 *
 * @ex
 * _.each([1, 2, 3], alert);
 * => alerts each number in turn...
 * _.each({one: 1, two: 2, three: 3}, alert);
 * => alerts each number value in turn...
*/

_.each = function(list, func, context) {
	if (_.isArray(list)) {
//		var i, el = list[i];
//		var funct = func(i, el, list);
		 for (var i = 0; i < list.length; i++) {
			func.call(context, list[i], i, list);
		}
	}   else {
		for (var key in list) {
			func.call(context, list[key], key, list);
		}
	} 
};