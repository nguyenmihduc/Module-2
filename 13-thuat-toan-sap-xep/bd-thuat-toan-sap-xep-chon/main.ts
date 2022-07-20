


function Swap(arr, i: number, j: number) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j ++) {
            // if (arr[i] < arr[j]) {
            //     let temp = arr[i];
            //     arr[i] = arr[j];
            //     arr[j] = temp;
            // }
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr)
}
let arr = [64, 65, 12, 22, 11];
selectionSort(arr)