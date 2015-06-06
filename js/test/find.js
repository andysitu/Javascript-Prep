QUnit.test("Testing for find function", function(assert) {

	var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
	assert.equal(even, 2,"using find to find the index of array.");

	even = _.find([1,3,5,7], function(num){return num % 2 == 0;});
	assert.equal(undefined, even, "unable to find even number in array.");

	var even = _.detect([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
	assert.equal(even, 2,"Using detect to find even number in array.");

	var even = _.find({one:1, two: 2, three: 3}, function(num) { return num % 2 == 0});
	assert.equal(even, "two", "Find even number from object.");

})