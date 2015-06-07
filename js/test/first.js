QUnit.test("Test for first", function(assert) {
	assert.equal(_.first([5, 4, 3, 2, 1]), 5, "Testing example of array with undef n.");

	assert.deepEqual(_.first([5,4,3,2,1], 3), [5,4,3], 
		"Test with array and n of 3");
})