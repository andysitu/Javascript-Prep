// Have to test array individual values
var list1 = _.map([1, 2, 3], function(num){ return num * 3; });

QUnit.test("Map Test", function( assert) {
	for (var i = 0; i <= 2; i++) {
		assert.equal(list1[i], [3, 6, 9][i], 
			"Map testing with array [3, 6, 9]");
	}

});