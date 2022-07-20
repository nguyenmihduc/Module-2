function find(arr) {
    var array = [];
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[i] && array.indexOf(arr[i]) == -1) {
                array.push(arr[j]);
                break;
            }
        }
    }
    console.log(array);
    for (var i = 0; i < array.length; i++) {
        var count_1 = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] === array[i]) {
                count_1++;
            }
        }
        console.log("".concat(array[i], " xu\u1EA5t hi\u1EC7n ").concat(count_1));
    }
}
var array = [1, 2, 1, 2, 1, 4, 5, 5, 3, 1, 3, 3, 3, 3];
find(array);
