/** Retrieve all the names of the object's own enumerable properties.
 * 
 * _.keys({one: 1, two: 2, three: 3});
 * 
 * Example:
 * => ["one", "two", "three"]
 *
*/

_.keys = function(obj) {
	var list = [];
	for (var par in obj) {
		list.push(par);
	}
	return list;
}