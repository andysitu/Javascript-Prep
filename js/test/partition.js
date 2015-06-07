QUnit.test("Test for partition function", function(assert) {
	var arr = _.partition([0, 1, 2, 3, 4, 5], function(num) {return num %2 == 0;});

	assert.deepEqual(arr, [[0,2,4], [1,3,5]], "Predicate of even numbers.");
});