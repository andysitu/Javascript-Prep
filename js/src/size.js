_.size = function(list) {
	if (_.isArray(list)) {
		return list.length;
	}
	else {
		var count = 0;
		for (keys in list) {
			count++;
		}
		return count;
	}
};