QUnit.test("Test for map function", function(assert) {

	assert.deepEqual(_.map([1, 2, 3], function(num){ return num * 3; }),
		[3, 6, 9], "Returning value * 3 to array values.");

	assert.deepEqual(_.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; }),
		[3,6,9], "Returning value * 3 from an object");

	assert.deepEqual(_.map({one: 1, two: 2, three: 3}, function(num, key){ return key;}),
		["one", "two", "three"], "Testing that returning key from obj works.");

	var args = (function() {
		return arguments;
	})(1,2,3,4);

	assert.deepEqual(_.map(args, function(num) {return num;}), [1,2,3,4],
		"Test if pushing arguments will work.");

	assert.deepEqual(_.map([1,2,3,4], function(num, index){return num + index;}),
		[1,3,5,7], "Mapping index to array works.")

})