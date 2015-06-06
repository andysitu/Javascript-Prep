/* 
 * find_.find(list, predicate, [context]) 
 * Alias: detect 
 * Looks through each value in the list, returning the 
 * first one that passes a truth test (predicate), or 
 * undefined if no value passes the test. The function 
 * returns as soon as it finds an acceptable element, 
 * and doesn't traverse the entire list.
*/

_.find = _.detect = function(list, predicate, context) {

	if (Object.prototype.toString.call(list) == "[object Object]") {
		for (var key in list) {
			if (predicate.call(context, list[key]))
				return key;
		}
	} else {
		for (var i = 0; i <list.length; i++) {
			if (predicate.call(context, list[i]))
				return i + 1;
		}
	}

	return undefined;
}