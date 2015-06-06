QUnit.test("Test for each function", function(assert) {

	// Test that equating simple array values work.
	var list = [1,2,3,4,5,56];
	var testList = [];

	_.each(list, function(value, i){
		testList[i] = value;
	});

	// Increase array value by 1.
	assert.deepEqual(list, testList, "Equating two array of values works.");

	list1 = [1, 2, 3, 4, 5];
	_.each(list1, function(value, i) {
		list1[i] = value + 1;
	});

	assert.deepEqual(list1, [2, 3, 4, 5, 6], "Increase array values by 1.");

	list2 = {};
	_.each({one: 1, two: 2, three: 3}, function(value, key, list) {
		list2[key] = value;	
	})

	assert.deepEqual(list2, {one: 1, two: 2, three: 3}, "The objects are equal.");

	var list3 = [];
	_.each([1,1,1,1,1,1], function(value, i) {
		list3[i] = i;
	})
	assert.deepEqual(list3, [0,1,2,3,4,5], "The array is equal to the index values");
});
