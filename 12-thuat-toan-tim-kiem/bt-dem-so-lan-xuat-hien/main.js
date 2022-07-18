function countOccurrences(array, needle) {
    var count = 0;
    var arrayIndex = [];
    for (var i = 0; i < array.length; i++) {
        if (needle === array[i]) {
            count++;
            arrayIndex.push(i);
        }
    }
    // array.forEach((item, index) => {
    //     if (needle == item) {
    //         count++;
    //         arrayIndex.push(index)
    //     }
    // })
    if (count == 0) {
        console.log("".concat(needle, " khong co trong mang"));
    }
    else {
        console.log("".concat(needle, " xuat hien ").concat(count, " lan tai vi tri: ").concat(arrayIndex));
    }
}
countOccurrences([2, 4, 6, 8, 3, 5, 8, 9, 0, 4, 8], 8);
