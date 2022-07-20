function countOccurrences(array, x) {
    var count = 0;
    var indexArray = [];
    // for (let i = 0; i< array.length; i++) {
    //     if (x == array[i]) {
    //         count++;
    //         indexArray.push(i)
    //     }
    // }
    array.forEach(function (item, index) {
        if (x === item) {
            count++;
            indexArray.push(index);
        }
    });
    if (count == 0) {
        console.log("".concat(x, " khong co trong mang"));
    }
    else {
        console.log("".concat(x, " xuat hien ").concat(count, " lan tai vi tri ").concat(indexArray));
    }
}
countOccurrences([1, 1, 2, 3, 2, 1, 1], 1);
countOccurrences([1, 1, 2, 3, 2, 1, 1], 2);
countOccurrences([1, 1, 2, 3, 2, 1, 1], 3);
countOccurrences([1, 1, 2, 3, 2, 1, 1], 4);
