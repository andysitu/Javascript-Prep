/**
 * @method isArray
 * @param {Object} obj
 * @desc
 * Returns true if object is an Array
 */

_.isArray = function(obj) {

	return Object.prototype.toString.apply(obj) === "[object Array]";

};