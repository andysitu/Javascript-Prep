QUnit.test("Test for Each", function( assert ) {

/**
 * WHY DOES THERE HAVE TO BE TWO SEPARATE i VARIABLES IN FUNCTION each AND
 * THEN IN THE GLOBAL i VARBIABL THAT IS USED FOR THE FUNCTION THAT IS
 * CREATED TO AS A PARAMETER FUNCTION FOR EACH
*/

// Test by making function that adds 1 to entire array and then compares it to
// an array that will work and one that will fail.
	var arr = [1,2,3,4];
	var list = [];
	var i = 0;

	_.each(arr, (function(para) {
	//	for (var i = 0; i < arr.length; i++)	
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

	
	_.each(obj, function() {
		for (var prop in obj) {
			testObj[prop] = obj[prop];
		}
	});

	assert.deepEqual(testObj, obj, "objects each-fn should equal");
	assert.notDeepEqual(testObj, {hello: 4242, bye: 4242424}, "Objects each-fn does not equal")
//	console.log(obj);
//	console.log(testObj.name);
});