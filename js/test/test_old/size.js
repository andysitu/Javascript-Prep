QUnit.test("Test case for size.js", function( assert ) {
	var test1 = _.size({one: 1, two: 2, three: 3});

	assert.equal(test1, 3, "Testing of object with size of 3");

	var test2 = _.size([1,2,3,4,5]);
	assert.equal(test2, 5, "Testing of array length 5");

	var arr1 = [{a:1}, {b:2}, {c:3}];
	var test3 = _.size(arr1);
	assert.equal(test3, 3, "testing object in array");
});