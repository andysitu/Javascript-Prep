QUnit.test("Testing for filter", function(assert) {

	var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
	assert.deepEqual(evens, [2,4,6], "Return array of even numbers.");

	var evens = _.filter({one: 6, two: 2, three: 4}, function(num){ return num % 2 == 0});
	assert.deepEqual(evens, [6, 2, 4], "Return from object of even numbers.");

})