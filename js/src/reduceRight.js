_.reduceRight = function(list, iteratee, memo, context) {
	var sum = 0, i = 0;
	// or toString.call(list)
	if (Object.prototype.toString.call(list) == "[object Array]") {
		if (memo == undefined) {
			i = list.length - 2;
			memo = list[list.length-1];
		}
		else i = list.length -1;
		for ( ; i >= 0; i--) {
			memo = iteratee.call(context, memo, list[i], i, list);
		}
	} else {
		for (key in list) {
			if (memo == undefined && i == 0){
				memo = list[key];
				i++;
			} else {
				sum += iteratee.call(context, memo, list[key], key, list);
			}
		}
	}
	return memo;
};