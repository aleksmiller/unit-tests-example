var assert = require('assert');
var Sort = require('./sort');
var sort = new Sort();

describe('sort', function() {
    describe('quick', function() {
        var arr = [5, 7, 2, 3, 1, 4, 6];

        it('should return sorted array', function () {
            assert.equal(arr.sort()[0], sort.quick(arr)[0]);
            assert.equal(arr.sort()[arr.length - 1], sort.quick(arr)[arr.length - 1]);
        });
    });
});