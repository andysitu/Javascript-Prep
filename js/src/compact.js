/* 
 * _.compact(array) 
 * Returns a copy of the array with all falsy values removed. 
 * In JavaScript, false, null, 0, "", undefined and NaN are all falsy.
 */

_.compact = function(array) {
	// indexOf is also possible and is faster for larger arrays.
	var arr = [];

	for (var i = 0; i < array.length; i++) {
		if (array[i]) {
			arr.push(array[i]);
		}
	}

	return arr;
};