QUnit.test("Test for reduceRight", function(assert) {

	var list = [[0, 1], [2, 3], [4, 5]];
	var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);

	assert.deepEqual(flat, [4, 5, 2, 3, 0, 1], "Array in an array concating.");

})