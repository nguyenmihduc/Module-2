"use strict";
exports.__esModule = true;
exports.BubbleSort = void 0;
var BubbleSort = /** @class */ (function () {
    function BubbleSort() {
    }
    BubbleSort.Sort = function (list) {
        var needNextPass = true;
        for (var k = 0; k < list.length && needNextPass; k++) {
            needNextPass = false;
            for (var i = 0; i < list.length - k - 1; i++) {
                if (list[i] > list[i + 1]) {
                    var temp = list[i];
                    list[i] = list[i + 1];
                    list[i + 1] = temp;
                    needNextPass = true;
                }
            }
        }
    };
    BubbleSort.list = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12];
    return BubbleSort;
}());
exports.BubbleSort = BubbleSort;
BubbleSort.Sort(BubbleSort.list);
// for (let i = 0; i < BubbleSort.list.length; i++) {
//     console.log(BubbleSort.list[i])
// }
console.log(BubbleSort.list);
