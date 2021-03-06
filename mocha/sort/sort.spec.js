var assert = require('assert');
var sort = require('./sort');

describe('Sort', function() {
    describe('quick', function() {
        var arr = [5, 7, 2, 3, 1, 4, 6].slice(0);
        var arr_sorted = arr.sort();

        sort.quick(arr);

        it('should return sorted array', function () {
            assert.equal(arr_sorted[0], arr[0]);
            assert.equal(arr_sorted[arr.length - 1], arr[arr.length - 1]);
        });
    });

    describe('merge', function() {
        var arr = [5, 7, 2, 3, 1, 4, 6].slice(0);
        var arr_sorted = arr.sort();

        sort.merge(arr);

        it('should return sorted array', function () {
            assert.equal(arr_sorted[0], arr[0]);
            assert.equal(arr_sorted[arr.length - 1], arr[arr.length - 1]);
        });
    });

    describe('bubble', function() {
        var arr = [5, 7, 2, 3, 1, 4, 6].slice(0);
        var arr_sorted = arr.sort();

        sort.bubble(arr);

        it('should return sorted array', function () {
            assert.equal(arr_sorted[0], arr[0]);
            assert.equal(arr_sorted[arr.length - 1], arr[arr.length - 1]);
        });
    });
});