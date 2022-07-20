"use strict";
exports.__esModule = true;
exports.SelectionSort = void 0;
var SelectionSort = /** @class */ (function () {
    function SelectionSort() {
    }
    SelectionSort.selectionSort = function (list) {
        for (var i = 0; i < list.length - 1; i++) {
            var currentMin = list[i];
            var indexMin = i;
            for (var j = i + 1; j < list.length; j++) {
                if (currentMin > list[j]) {
                    currentMin = list[j];
                    indexMin = j;
                }
            }
            if (indexMin != 1) {
                list[indexMin] = list[i];
                list[i] = currentMin;
            }
        }
    };
    SelectionSort.list = [1, 9, 4.5, 6.6, 5.7, -4.5];
    return SelectionSort;
}());
exports.SelectionSort = SelectionSort;
SelectionSort.selectionSort(SelectionSort.list);
for (var i = 0; i < SelectionSort.list.length; i++)
    console.log(SelectionSort.list[i] + " ");
