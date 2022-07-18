var myArray = []; // mảng gốc
function sapXepMangBeDenLon(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i; j < array.length; j++) {
            var temp = void 0;
            if (array[i] > array[j]) {
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}
myArray.push(1);
sapXepMangBeDenLon(myArray);
myArray.push(4);
sapXepMangBeDenLon(myArray);
myArray.push(5);
sapXepMangBeDenLon(myArray);
myArray.push(2);
sapXepMangBeDenLon(myArray);
console.log(myArray);
// console.log(sapXepMangBeDenLon(myArray));
// console.log(myArray); // mảng gốc bị thay đổi theo
