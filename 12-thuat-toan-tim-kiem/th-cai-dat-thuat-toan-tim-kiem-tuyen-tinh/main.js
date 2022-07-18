function findItemMiss(array) {
    var missArray = [];
    var a = 1;
    // for (let i = 1; i <= 10; i++) {
    //     if (array.indexOf(a) == -1) {
    //         missArray.push(a)
    //     }
    //     a++
    // }
    // while (a <= 10) {
    //     if (array.indexOf(a) == -1) {
    //         missArray.push(a)
    //     }
    //     a++
    // }
    while (a <= 10) {
        array.forEach(function (item) {
            if (a !== item) {
                missArray.push(a);
            }
        });
        a++;
    }
    return missArray;
}
console.log(findItemMiss([1, 2, 5, 6, 7, 10]));
