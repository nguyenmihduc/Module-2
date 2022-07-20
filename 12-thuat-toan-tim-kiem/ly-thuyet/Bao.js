function checkAvailable(array, n) {
    var flag = true;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == n) {
            flag = false;
            break;
        }
    }
    return flag;
}
// viet lai ham indexOf
function bai2(array) {
    var myArray = []; // mang chua phan tu lap lai
    var countArray = []; // mang nay chua so lan xuat hien
    for (var i = 0; i < array.length; i++) {
        var count = 1;
        var flag = false;
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] == array[j]) {
                count++;
                if (checkAvailable(myArray, array[i])) {
                    myArray.push(array[i]);
                    flag = true;
                }
            }
        }
        if (count != 1 && flag) {
            countArray.push(count);
        }
    }
    console.log(myArray);
    console.log(countArray);
}
var numbers = [1, 2, 1, 4, 5, 2, 3, 1, 2, 3];
bai2(numbers);
