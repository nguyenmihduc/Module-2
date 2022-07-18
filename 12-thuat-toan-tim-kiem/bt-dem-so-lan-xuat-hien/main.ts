function countOccurrences(array: number[], needle: number) {
    let count = 0;
    let arrayIndex = []
    for (let i = 0; i < array.length; i++) {
        if (needle === array[i]) {
            count++;
            arrayIndex.push(i)
        }
    }
    // array.forEach((item, index) => {
    //     if (needle == item) {
    //         count++;
    //         arrayIndex.push(index)
    //     }
    // })
    if (count == 0) {
        console.log(`${needle} khong co trong mang`)
    } else {
        console.log(`${needle} xuat hien ${count} lan tai vi tri: ${arrayIndex}`)
    }
}
countOccurrences([2,4,6,8,3,5,8,9,0,4,8],8)
