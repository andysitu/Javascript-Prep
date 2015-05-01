QUnit.test("reduceRight testing", function( assert) {
	assert.equal(_.reduceRight([1, 2, 3], function(memo, num)
		{ return memo + num; }, 0), 6, "reduceRight to get 6");

	var list = [[0, 1], [2, 3], [4, 5]];
	var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
	assert.deepEqual(flat, [4,5,2,3,0,1], "reduceRight matches array in array");

	var obj1 = {a: 1, b: 2, c:3};
	var test1 = _.reduceRight(obj1, function(a,b) { return a + b;}, 0);
	assert.equal(test1, 6, "reduceRight of Object to get value 6");

	var obj2 = []; 
	_.reduceRight(obj1, function(a,b) {obj2.push(b);}, 0);
	assert.deepEqual(obj2, [3,2,1], "reduceRight of Object into array values [3,2,1]");

	var obj3 = {};
	_.reduceRight(obj1, function(a,b, key) { this[key] = b; }, 0, obj3);
	assert.deepEqual({c: 3, b: 2, a: 1}, obj3, 
		"reduceRight of Object to match {c: 3, b: 2, a: 1},");
})