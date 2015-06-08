QUnit.test("Test for bind function", function(assert) {
	var func = function(greeting){ return greeting + ': ' + this.name };
	func = _.bind(func, {name: 'moe'}, 'hi');
	var test = func();

	assert.equal(test, 'hi: moe', "tests function returning property of object.");
})