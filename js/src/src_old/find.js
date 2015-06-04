_.find = function(list, predicate, context) {
	var value = undefined;
	if (Object.prototype.toString.call(list) == "[object Array]") {
		for (var i = 0; i < list.length; i++) {
			if (predicate.call(context, list[i])) {
				value = list[i];
				break;
			}
		}
	} else {
		for (var key in list) {
			if (predicate.call(context, list[key])) {
				value = list[key];
				break;
			}
		}
	}

	return value;
};