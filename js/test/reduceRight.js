QUnit.test("reduceRight testing", function( assert) {
	assert.equal(_.reduceRight([1, 2, 3], function(memo, num)
		{ return memo + num; }, 0), 6, "reduceRight to get 6");
})