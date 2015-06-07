QUnit.test("Testing for where", function(assert) {
	var testArr = [{title: "Cymbeline", author: "Shakespeare", year: 1611},
    {title: "The Tempest", author: "Shakespeare", year: 1611}];

    var results = _.where(testArr, {author: "Shakespeare", year: 1611});

    assert.deepEqual(results, testArr, "The example works from underscore works.");

    testArr = {one: [1,2,3,4]};
    results = _.where(testArr, [1,2]);

     assert.deepEqual(results, [[1,2,3,4]], "Testing an array in object.");
})