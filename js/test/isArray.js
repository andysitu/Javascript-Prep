QUnit.test( "isArray Test", function( assert ) {
  assert.ok( _.isArray([]), "Test isArray");
  assert.notOk( _.isArray("HELLO"), "Test isArray (string)");
});