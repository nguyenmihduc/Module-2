// type FruitsName = "Apple" | "Mango" | "Orange";
// function showFruitName(fruitsName: FruitsName): void {
//     console.log(fruitsName);
// }
// showFruitName('Mango');   //OK - Print 'Mango'
// //Compile Time Error
// // showFruitName('Banana');
var regexpNumber = new RegExp('^[+ 0-9]{5}$');
console.log(regexpNumber.test('12345'));
// expected output: true
console.log(regexpNumber.test('1234f'));
// expected output: false
console.log(regexpNumber.test('123456'));
// expected output: false
