QUnit.test("Test for size function", function(assert){
	var value = _.size({one: 1, two: 2, three: 3});
	assert.equal(value, 3, "Testing size of an object.");

	value = _.size([1,2,3,4,5]);
	assert.equal(value, 5, "Testing size of an object.");

	value = _.size([]);
	assert.equal(value, 0, "Testing size of an empty array.");
})