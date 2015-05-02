_.filter = function(list, predicate, context) {
	var value = [], counter =0;
	if (Object.prototype.toString.call(list) == "[object Array]") {
		for (var i = 0; i < list.length; i++) {
			if (predicate.call(context, list[i])) {
				value.push(list[i]);
				counter++;
			}
		}
	} else {
		for (var key in list) {
			if (predicate.call(context, list[key])) {
				value.push(list[key]);
				counter++;
			}
		}
	}

	if (counter <= 0) 
		return undefined;
	else 
		return value;
};