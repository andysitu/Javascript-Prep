QUnit.test("Test for reduce function", function(assert) {

	var sum = _.reduce([1, 2, 3], 
		function(memo, num){ return memo + num; }, 0);

	assert.equal(sum, 6, "Reduce of array to return memo + num works with memo");

	sum = _.reduce([1, 2, 3], 
		function(memo, num){ return memo + num; });

	assert.equal(sum, 6, "Reduce of array to return memo + num works without memo");

	sum = _.reduce({one: 1, two: 2, three: 3}, 
		function(memo, num) {return memo * num}, 1);

	assert.equal(sum, 6, "Reduce object with memo * num with memo of 1");

	var arr = [1,2,3,4];
	sum = _.reduce([1,2,3,4], function(memo, num, i) {
		return memo + num + this[i];
	}, 0,  arr);
	assert.equal(sum, 20, "Reduce object with memo along with arr with memo of 0");
});