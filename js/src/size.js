_.size = function(list) {
	if (_.isArray(list)) {
		return list.length;
	}
	else {
		var keys = Object.keys(list);
		return keys.length;
	}
};