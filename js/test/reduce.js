QUnit.test("Test for reduce in underscore", function( assert ){
	var sum = _.reduce([1, 2, 3], function(memo, num)
		{ return memo + num; }, 0);
	var sum1 = _.reduce([1, 2, 3], function(memo, num)
		{ return memo + num; }, 1);
	var sum2 = _.reduce([1, 2, 3], function(memo, num)
		{ return memo; }, 1);	
	var sum3 = _.reduce({one:1, two: 2, three: 3}, function(memo, num)
		{ return memo + num; }, 0);
	var sum4 = _.reduce({one:1, two: 2, three: 3}, function(memo, num)
		{ return memo + num; }, 10);
	var sum5 = _.reduce([1, 2, 3], function(memo, num)
		{ return memo + num; });
	var sum6 = _.reduce([4, 2, 3], function(memo, num)
		{ return memo + num; });	

	assert.equal(sum, 6, "[1,2,3] with memo(0)+num = 6");
	assert.equal(sum1, 9, "[1,2,3] with memo(1)+num = 9");
	assert.equal(sum2, 3, "[1,2,3] with memo(1) only returned = 9");
	assert.equal(sum3, 6, "Object with memo(0) + num for 6");
	assert.equal(sum4, 36, "Object with memo(10) + num for 36");
	assert.equal(sum5, 7, "[1,2,3] with no memo +num = 7");
	assert.equal(sum6, 13, "[4,2,3] with no memo +num = 13");
});