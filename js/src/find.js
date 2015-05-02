_.find = function(list, predicate, context) {
	if (Object.prototype.toString.call(list) == "[object Array]") {
		var value = 0;
		for (var i = 0; i < list.length; i++) {
			if (predicate.call(context, list[i])) {
				value = list[i];
				break;
			} else {
				value = undefined;
			}
		}
	} else {
		var value = 0;
		for (var key in list) {
			if (predicate.call(context, list[key])) {
				value = list[key];
				break;
			} else {
				value = undefined;
			}
		}
	}

	return value;
};