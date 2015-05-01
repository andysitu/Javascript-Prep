QUnit.test("Test for reduce in underscore", function( assert ){
	var sum = _.reduce([1, 2, 3], function(memo, num)
		{ return memo + num; }, 0);

	assert.equal(sum, 6, "[1,2,3] with memo(0)+num = 6");
});