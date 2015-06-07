/* partition
 * Split array into two arrays: one whose elements 
 * all satisfy predicate and one whose elements all 
 * do not satisfy predicate.
 */

 _.partition = function(array, predicate) {
 	var arr = [[], []];

 	for (var i = 0; i < array.length; i++) {
 		if (predicate(array[i])) {
 			arr[0].push(array[i]);
 			array.splice(i, 1);
 	 	}
 	}

 	arr[1] = array;
 	return arr;
 };