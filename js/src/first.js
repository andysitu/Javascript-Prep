/* 
 * first_.first(array, [n]) 
 * Alias: head, take 
 * Returns the first element of an array. Passing n 
 * will return the first n elements of the array.
*/

_.first = _.head = _.take = function(array, n) {

	if (n == undefined) 
		return array[0];

	var arr = [];
	for (var i = 0; i < n; i++) 
		arr.push(array[i]);

	return arr;
};