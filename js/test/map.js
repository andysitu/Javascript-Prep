// Have to test array individual values
var list1 = _.map([1, 2, 3], function(num){ return num * 3; });
var list2 = _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
var list3 = _.map([[1, 2], [3, 4], [5,6]], _.first);
var list4 = _.map([1,2,3,4], function(value, i){return i;});
var list5 = _.map({test: 1, test2: 2, test3: 3}, function(value, key, list){
	return key;
})

QUnit.test("Map Test", function( assert) {
	for (var i = 0; i < list1.length; i++) {
		assert.equal(list1[i], [3, 6, 9][i], 
			"Map testing with array [3, 6, 9]");
	}

	for (var i = 0; i <list2.length; i++) {
		assert.equal(list2[i], [3,6,9][i],
			"Map testing with objects & [3,6,9]");
	}	

	for (var i = 0; i <list3.length; i++) {
		assert.equal(list3[i], [1,3,5][i],
			"Map testing with objects, _.first for [1,3]");
	}

	for (var i = 0; i <list4.length; i++) {
		assert.equal(list4[i], [0,1,2,3][i],
			"Map testing, index value into array [0,1,2,3]");
	}

	for (var i = 0; i <list5.length; i++) {
		assert.equal(list5[i], ["test", "test2", "test3"][i],
			"Map testing, index value into array [0,1,2,3]");
	}
});	