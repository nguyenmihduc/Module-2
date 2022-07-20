

function find(arr: number[]) {
    let array: number[] = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[i] && array.indexOf(arr[i]) == -1) {
                array.push(arr[j]);

                break;
            }
        }
    }
    console.log(array);

    for (let i = 0; i < array.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === array[i]) {
                count++;
            }
        } console.log(`${array[i]} xuất hiện ${count}`);
    }
}
let array = [1, 2, 1, 2, 1, 4, 5, 5, 3, 1, 3, 3, 3, 3];
find(array);
