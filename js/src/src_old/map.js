/**
 * Produces a new array of values by mapping each 
 * value in list through a transformation function 
 * (iteratee). The iteratee is passed three arguments: 
 * the value, then the index (or key) of the iteration, 
 * and finally a reference to the entire list.
 *
*/

_.map = function(list, iteratee, context) {
	if (Object.prototype.toString.apply(list) === "[object Array]") {
		var arr =[];
		{ 	for (var i = 0; i < list.length; i++) {
			arr[i] = iteratee.call(context, list[i], i, list);
			}	
		}
		return arr;
	} else {
		var arr = [];
		for (key in list) {
			arr.push(iteratee.call(context, list[key], key, list));
		}
		return arr;	
	}
}