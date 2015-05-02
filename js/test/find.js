QUnit.test( "testing for find.js", function ( assert ) {
	var test1 = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
	assert.equal(test1, 2, "First even number of array is 2");

	var test2 = _.find({a: 1, b: 2, c: 3}, function(num){ return num % 2 == 0; });
	assert.equal(test2, 2, "First even number of object is 2");

	var test3 = _.find([1, 3, 5, 7], function(num){ return num % 2 == 0; });
	assert.equal(test3, undefined, "First even number of array returns undefined");

	var test4 = _.find({a: 1, b: 7, c: 3}, function(num){ return num % 2 == 0; });
	assert.equal(test4, undefined, "First even number of object returns undefined");
});