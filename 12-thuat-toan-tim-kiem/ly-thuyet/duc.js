function findRepeat(array) {
    var numberRepeatList = [];
    var string = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] === array[i] && numberRepeatList.indexOf(array[i]) == -1) {
                numberRepeatList.push(array[i]);
                break;
            }
        }
    }
    console.log(array);
    console.log(numberRepeatList);
    for (var i = 0; i < numberRepeatList.length; i++) {
        var count = 0;
        for (var j = 0; j < array.length; j++) {
            if (array[j] === numberRepeatList[i]) {
                count++;
            }
        }
        console.log("".concat(numberRepeatList[i], " xu\u1EA5t hi\u1EC7n ").concat(count));
        string.push(count, numberRepeatList[i]);
    }
    console.log(string.join(''));
}
var arr = 'AAAAABBCCDDDDDEE';
findRepeat(arr);
