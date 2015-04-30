/** Returns the first element of an array. Passing 
 * n will return the first n elements of the array.
*/

_.first =function(arr, n, testcase){
	var arr1 = [];
	// From underscore.js, testcase is specifically for _.map
	if (n === undefined || testcase) {
		return arr[0];
	} else {
		if (n>= arr.length) n = arr.length;
		for (var i = 0; i < n; i++) {
			arr1.push(arr[i]);
		}
	}
	return arr1;
};