// function check(n) {
//     if (!(n >= -500 && n <= 500)) {
//         throw new RangeError("doi tuong check phai trong khoang -500 den 500")
//     }
//     console.log(`${n} dat yau cau`)
// }
// function display() {
//     console.log("hahahaha")
// }
//
// try {
//     check(2000)
// } catch (error) {
//     if (error instanceof RangeError) {
//         console.log(error.message)
//         display()
//     }
// }
function check(value) {
    if (!["apple", "banana", "carrot"].includes(value)) {
        throw new RangeError('The argument must be an "apple", "banana", or "carrot".');
    }
}
try {
    check("cabbage");
}
catch (error) {
    if (error instanceof RangeError) {
        console.log(error.message);
    }
}
//# sourceMappingURL=main.js.map