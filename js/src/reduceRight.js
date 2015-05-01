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
		var keyStor = Object.keys(list);
		if (memo == undefined) {
			i = keyStor.length -2;
			memo = list[keyStor[keyStor.length-1]]
		} else i = keyStor.length -1;
		for ( ; i >= 0; i--) {
			memo = iteratee.call(context, memo, list[keyStor[i]], keyStor[i], list);
		}	
	}
	return memo;
};