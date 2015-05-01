// Have to test array individual values
var list1 = _.map([1, 2, 3], function(num){ return num * 3; });
var list2 = _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
var list3 = _.map([[1, 2], [3, 4], [5,6]], _.first);
var list4 = _.map([1,2,3,4], function(value, i){return i;});
var list5 = _.map({test: 1, test2: 2, test3: 3}, function(value, key, list){
	return key;
})

QUnit.test("Map Test", function( assert) {
		assert.deepEqual(list1, [3, 6, 9], 
			"Map testing with array [3, 6, 9]");

		assert.deepEqual(list2, [3,6,9],
			"Map testing with objects & [3,6,9]");

		assert.deepEqual(list3, [1,3,5],
			"Map testing with objects, _.first for [1,3,5]");

		assert.deepEqual(list4, [0,1,2,3],
			"Map testing, index value into array [0,1,2,3]");

		assert.deepEqual(list5, ["test", "test2", "test3"],
			"Map testing, index value into array [0,1,2,3]");
});	