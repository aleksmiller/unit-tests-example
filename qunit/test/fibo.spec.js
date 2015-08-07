// test fibo function
QUnit.test( "Fibo test", function( assert ) {
    assert.equal(fibo(1), 1);
    assert.equal(fibo(2), 1);
    assert.equal(fibo(5), 5);
    assert.equal(fibo(10), 55);
    assert.equal(fibo(15), 610);
});