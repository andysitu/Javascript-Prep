/* 
 * filter_.filter(list, predicate, [context]) 
 * Alias: select 
 * Looks through each value in the list, returning an 
 * array of all the values that pass a truth test (predicate).
*/

_.filter = _.select = function(list, predicate, context) {
	var arr = [];

	
	if (Object.prototype.toString.call(list) == "[object Object]") {
		for (var key in list) {
			if (predicate.call(context, list[key]))
				arr.push(list[key]);
		}
	} else {
		for (var i = 0; i < list.length; i++ ) {
			if (predicate.call(context, list[i]))
				arr.push(list[i]);
		}
	}

	return arr;
}