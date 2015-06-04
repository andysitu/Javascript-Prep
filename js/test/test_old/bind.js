QUnit.test("Testing for Bind", function( assert ) {
	var func = function(greeting){ return greeting + ': ' + this.name };
	func = _.bind(func, {name: 'moe'}, 'hi');
	var test = func();

	assert.equal(test, "hi: moe", "Bind obj to function to produce hi:moe");

	var func1 = function(mult) { return this.a * mult;};
	var val = _.bind(func1, {a: 5}, 5);
	val = val();	

	assert.equal(val, 25, "Testing object return value multipliy with argument for 25");

	var func2 = function(one, two, three) { return this.a * one * two * three;};
	var val1 = _.bind(func2, {a: 5}, 5, 7, 6);
	val1 = val1();

	assert.equal(val1, 1050, "Testing objects with multiple args to get 1050");

});