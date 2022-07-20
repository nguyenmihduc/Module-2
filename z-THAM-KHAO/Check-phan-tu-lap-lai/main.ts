function countOccurrences(array: number[], x: number) {
    let count = 0;
    let indexArray = []
    // for (let i = 0; i< array.length; i++) {
    //     if (x == array[i]) {
    //         count++;
    //         indexArray.push(i)
    //     }
    // }
    array.forEach((item, index) => {
        if ( x === item) {
            count++;
            indexArray.push(index)
        }
    })
    if ( count == 0) {
        console.log(`${x} khong co trong mang`)
    } else {
        console.log(`${x} xuat hien ${count} lan tai vi tri ${indexArray}`)
    }
}

countOccurrences([1,1,2,3,2,1,1],1)
countOccurrences([1,1,2,3,2,1,1],2)
countOccurrences([1,1,2,3,2,1,1],3)
countOccurrences([1,1,2,3,2,1,1],4)
