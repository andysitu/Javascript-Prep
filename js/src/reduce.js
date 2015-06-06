/* 
 * reduce_.reduce(list, iteratee, [memo], [context]) 
 * Aliases: inject, foldl 
 * Also known as inject and foldl, reduce boils down 
 * a list of values into a single value. Memo is the 
 * initial state of the reduction, and each successive 
 * step of it should be returned by iteratee. The 
 * iteratee is passed four arguments: the memo, then 
 * the value and index (or key) of the iteration, and 
 * finally a reference to the entire list.
*/

_.reduce = _.inject = _.foldl = function(list, iteratee, memo, context) {
	var rec = Object.keys(list);
	if (memo === undefined) {
		memo = list[(rec[0])];
		for (var i = 1; i < rec.length; i++) {
			memo = iteratee.call(context, memo, list[rec[i]], rec[i], list)
		}
	} else {
		for (var i = 0; i < rec.length; i++) {
			memo = iteratee.call(context, memo, list[rec[i]], rec[i], list)
		}
	}

	return memo;
};