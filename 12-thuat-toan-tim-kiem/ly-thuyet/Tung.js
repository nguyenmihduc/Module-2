function find(arr) {
    var arrNew = [];
    for (var i = 0; i < arr.length; i++) {
        var count = 0;
        for (var j = arr.length - 1; j >= 0; j--) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }
        if (count >= 2 && arrNew.indexOf(arr[i]) == -1) {
            arrNew.push(arr[i]);
            console.log("Ph\u1EA7n t\u1EED ".concat(arr[i], " xu\u1EA5t hi\u1EC7n : ").concat(count));
        }
    }
    console.log(arrNew);
}
var arr = [1, 2, 3, 2, 1, 2, 3, 5, 6, 6, 6];
find(arr);
