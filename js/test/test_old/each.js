QUnit.test("Test for Each", function( assert ) {

// Test by making function that adds 1 to entire array and then compares it to
// an array that will work and one that will fail.
	var arr = [1,2,3,4];
	var list = [];
	var i = 0;

	_.each(arr, (function(para) {	
			list[i] = para + 1;
			i++;

		}));
	//		funct() {list[i] = arr[i] + 1;} );


	assert.deepEqual(list, [2, 3, 4, 5], "each to compare array incremented by 1");
	assert.notDeepEqual(list, [4,2,"a"], "each to compare notEqual array");

// Compares object similar to previous method.

	var obj = {	name: "And", 
				lastName: "Sit"};
	var testObj = {};

	
	_.each(obj, function(value, prop) {
			return testObj[prop] = obj[prop];
		});
	

	assert.deepEqual(testObj, obj, "objects each-fn should equal");
	assert.notDeepEqual(testObj, {hello: 4242, bye: 4242424}, "Objects each-fn does not equal")


	var obj1 = [1,2,3,4];
	var test = [];
	_.each(obj1, function(value, key){
		test.push(value)});

	assert.deepEqual(test, [1,2,3,4], "test");
});