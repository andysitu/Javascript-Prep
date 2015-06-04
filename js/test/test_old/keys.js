QUnit.test("keys Test", function( assert ) {

	var list1 = _.keys({one: 1, two: 2, three: 3});
	var list2 = _.keys({1: "fire", 2: "sto"});
	var test1 = ["one", "two", "three"];
	var test2 = ["1", "2"];


	for (var i = 0; i <= 3; i++) {
		assert.equal(list1[i], test1[i], 
			"keys testing with Object {one: 1, two: 2, three: 3}");
	}
	for (var i = 0; i <= 2; i++) {
		assert.equal(list2[i], test2[i], 
			"keys testing with Object {1: \"fire\", 2: \"sto\"}");
	}
});