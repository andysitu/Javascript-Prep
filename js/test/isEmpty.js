QUnit.test("Test for isEmpty function", function(assert) {
	assert.ok(!(_.isEmpty([1, 2, 3])), "Not an empty array");

	assert.ok(_.isEmpty({}), "An empty object.");
});