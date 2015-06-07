/* 
 * _.initial(array, [n]) 
 * Returns everything but the last entry of the array. 
 * Especially useful on the arguments object. Pass n to 
 * exclude the last n elements from the result.
*/

_.initial = function(array, n) {
	if (n == undefined)
		n = 1;
	len = array.length
	for (var i = len; i > len - n; i--) {
		array.pop();
	}

	return array;
}