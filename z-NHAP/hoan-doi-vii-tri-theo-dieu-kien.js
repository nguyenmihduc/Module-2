var array = [5, 3, 7, 9, 2, 1, 8];
var convert = [];
// array.sort(function (a,b){return a - b})
// console.log(array)
// array.sort(function (a,b){return b - a})
// console.log(array)
var max = array[0];
var maxIndex = -1;
// for (let j = 0 ; j < array.length; j++) {
for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
        maxIndex = i;
    }
    convert.push(max);
    array.splice(maxIndex, 1);
}
// }
// console.log(maxIndex)
console.log(convert);
console.log(array);
