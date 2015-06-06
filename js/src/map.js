/* 
 * each_.each(list, iteratee, [context]) 
 * 	Alias: forEach 
 * Iterates over a list of elements, yielding each 
 * in turn to an iteratee function. The iteratee is
 * bound to the context object, if one is passed. 
 * Each invocation of iteratee is called with three 
 * arguments: (element, index, list). If list is a 
 * JavaScript object, iteratee's arguments will be 
 * (value, key, list). Returns the list for chaining.
 *
*/

_.map = _.collect = function(list, iteratee, context) {
	var arr = [];
	if (Object.prototype.toString.call(list) === "[object Object]") {
		for (var key in list) {
			arr.push(iteratee.call(context, list[key], key, list));
		}
	} else {
		for (var i = 0; i < list.length; i++) {
			arr.push(list[i] = iteratee.call(context, list[i], i, list));
		}
	}

	return arr;
}