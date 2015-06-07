/* 
 * _.where(list, properties) 
 * Looks through each value in the list, returning an 
 * array of all the values that contain all of the 
 * key-value pairs listed in properties.
*/

// Object in object; array in array; Not done

_.where = function(list, prop) {
	var arr = [], counter = 0;
	var arrKeys = (function(prop){ return Object.keys(prop); })(prop)
	var keyLength = arrKeys.length;

	// Test if it's an object
	if (Object.prototype.toString.call(list) == "[object Object]") {
		// Tests if property is an object. Thinking is to match object with object
		// But it might be the case of an object in an object. Will ignore that for now.
		if (Object.prototype.toString.call(prop) == "[object Object]") {
			for (var keyProp in prop)
				for (var key in list) {
					if ((list[key] == prop[keyProp]) && (key = keyProp))
						arr.push(list[key]); 
				  }
		// else it's an array, then list is an object of arrays
		} else {
			for (var key in list) {
				counter = 0;

				for (var i = 0; i < prop.length; i++) {
					for (var j = 0; j < list[key].length; j++) {
						if (list[key][j] == prop[i])
							counter++; 
					  }
				}
				if (counter == keyLength)
					arr.push(list[key]);
			}
		}
	} else {
		// Object in an array
		if (Object.prototype.toString.call(prop) == "[object Object]") {
			for (var i = 0; i < list.length; i++) { 
				for (var keyProp in prop) {
					for (var key in list[i]) {
						if ((list[i][key] == prop[keyProp]) && (key == keyProp))
							counter++;
					}
				}
				if (keyLength == counter)
					arr.push(list[i]);
				counter = 0;
			}	
		// Array matching with an array	
		} else {
			// Empty for now
		}
	}

	return arr;
}