/** 
 * _.reduce(list, iteratee, [memo], [context])
 * 
 * Also known as inject and foldl, reduce boils 
 * down a list of values into a single value. Memo 
 * is the initial state of the reduction, and each 
 * successive step of it should be returned by 
 * iteratee. The iteratee is passed four arguments: 
 * the memo, then the value and index (or key) of 
 * the iteration, and finally a reference to the entire 
 * list.
 *
 * If no memo is passed to the initial invocation of 
 * reduce, the iteratee is not invoked on the first 
 * element of the list. The first element is instead 
 * passed as the memo in the invocation of the iteratee 
 * on the next element in the list.
*/

_.reduce = function(list, iteratee, memo, context) {
	var sum = 0, i = 0;
	// or toString.call(list)
	if (Object.prototype.toString.call(list) == "[object Array]") {
		if (memo == undefined) {
			i = 1;
			memo = list[0];
		}
		for ( ; i < list.length; i++) {
			sum += iteratee.call(context, memo, list[i], i, list);
		}
	} else {
		for (key in list) {
			if (memo == undefined && i == 0){
				memo = list[key];
				i++;
			} else {
				sum += iteratee.call(context, memo, list[key], key, list);
			}
		}
	}
	return sum;
};