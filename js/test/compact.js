QUnit.test("Test for compact function", function(assert) {
	var arr = _.compact([0, 1, false, 2, '', 3]);

	assert.deepEqual(arr, [1, 2, 3], "Array with false, \"\"");

	arr = _.compact([0, NaN, false, '', undefined]);
	assert.deepEqual(arr, [], "Return an empty array.");
});