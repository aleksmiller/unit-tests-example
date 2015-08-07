// red
// green
var fibo = function(num) {
    if (num <= 1) {
        return num;
    }

    var fibo_arr = [0, 1, 1];
    for (var i = 3; i <= num; i++) {
        fibo_arr.push(fibo_arr[i-1] + fibo_arr[i-2]);
    }

    return fibo_arr[num];
};

// refactoring
/*var fibo = function(num) {
    if (num <= 1) {
        return num;
    }
    return fibo(num-1) + fibo(num-2);
};*/
