/* _.isEmpty(object) 
 * Returns true if an enumerable object contains 
 * no values (no enumerable own-properties). For 
 * strings and array-like objects _.isEmpty checks 
 * if the length property is 0.
*/ 

_.isEmpty = function(obj) {
	if (obj.length > 0) 
		return false;
	return true;
};