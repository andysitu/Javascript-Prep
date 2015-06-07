QUnit.test("Test for initial function", function(assert) {
	var arr = _.initial([5, 4, 3, 2, 1]);

	assert.deepEqual(arr, [5,4,3,2], "Test for array with undefined n.");

	arr = _.initial([5, 4, 3, 2, 1], 3);

	assert.deepEqual(arr, [5,4], "Test with n equal to 3");

})