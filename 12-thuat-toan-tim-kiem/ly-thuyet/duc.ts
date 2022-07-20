

function findRepeat(array: string) {
    let numberRepeatList: string[] = [];
    let string = []
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] === array[i] && numberRepeatList.indexOf(array[i]) == -1 ) {
                numberRepeatList.push(array[i]);
                break;
            }
        }
    }
    console.log(array)
    console.log(numberRepeatList);

    for (let i = 0; i < numberRepeatList.length; i++) {
        let count = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[j] === numberRepeatList[i]) {
                count++
            }
        }
        console.log(`${numberRepeatList[i]} xuất hiện ${count}`);
        string.push(count,numberRepeatList[i])
    }
    console.log(string.join(''))
}
let arr = 'AAAAABBCCDDDDDEE'
findRepeat(arr)
