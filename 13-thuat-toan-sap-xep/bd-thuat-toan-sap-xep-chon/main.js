function Swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var min = arr[i];
        for (var j = i; j < arr.length; j++) {
            // if (arr[i] < arr[j]) {
            //     let temp = arr[i];
            //     arr[i] = arr[j];
            //     arr[j] = temp;
            // }
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}
var arr = [64, 65, 12, 22, 11];
selectionSort(arr);
