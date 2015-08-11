// sort module
var Sort = (function() {

    // swap function
    function swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // quick sort
    function partition( arr, left, right ) {
        var pivot = arr[ Math.floor((right + left)/2) ];
        var l = left;
        var r = right;

        while (l <= r) {

            while(arr[l] < pivot) {
                l++;
            }

            while(arr[r] > pivot) {
                r--;
            }

            if (l <= r) {
                swap(arr, l, r);
                l++;
                r--;
            }

            return l;
        }
    }

    function quickSort(arr, left, right) {
        var idx;

        if ( arr.length > 1 ) {
            idx = partition(arr, left, right);

            if (left < idx - 1) {
                quickSort(arr, left, idx - 1);
            }

            if (idx < right) {
                quickSort(arr, idx + 1, right);
            }
        }

        return arr;
    }

    function quick( arr ) {
        return quickSort(arr, 0, arr.length - 1);
    }

    // bubble sort
    function bubble( arr ) {
        for (var i = arr.length; i > 0; i--) {
            for (j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j+1);
                }
            }
        }

        return arr;
    }


    return {
        quick: quick,
        bubble: bubble
    }
})();

module.exports = Sort;