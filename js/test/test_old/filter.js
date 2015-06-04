QUnit.test("Testing for filter.js", function( assert ) {
	var test1 = _.filter([1, 2, 3, 4, 5, 6], function(num)
		{ return num % 2 == 0; });

	assert.deepEqual( test1, [2,4,6], "Finding event numbers in array");

	var test2 = _.filter([1, 11, 3, 41, 55, 71], function(num)
		{ return num % 2 == 0; });

	assert.equal( test2, undefined, "Not finding any evens in an array");

	var test3 = _.filter({a: 2, b: 4, c: 6}, function(num)
		{ return num % 2 == 0;});

	assert.deepEqual(test3, [2, 4, 6], "Finding all evens in an object");

	var test4 = _.filter({a: 21, b: 41, c: 61}, function(num)
		{ return num % 2 == 0;});

	assert.deepEqual(test4, undefined, "Finding no evens in an object");
});