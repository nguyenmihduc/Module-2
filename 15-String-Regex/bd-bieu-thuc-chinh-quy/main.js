// let regexpNumber = new RegExp('^[+ 0-9]{5}$');
// console.log(regexpNumber.test('12345'));
// // expected output: true
// console.log(regexpNumber.test('1234f'));
// // expected output: false
// console.log(regexpNumber.test('123456'));
// // expected output: false
// let regexpEmail =
//     new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
// console.log(regexpEmail.test('marco@expertcodebolg.com'));
// // expected output: true
// console.log(regexpEmail.test('marcoexpertcodebolg.com'));
// // expected output: false
// let regexpEmail = new RegExp('^((?!(badstring)).)*$')
// // let regexpEmail : RegExp = /^((?!(badstring)).)*$/
// console.log(regexpEmail.test('marco@expertcodebolg.com'))
// // expected output: true
// console.log(regexpEmail.test('marcobadstring@expertcodebolg.com'))
// // expected output: false
var chessStory = 'He played the King in a5 and she moved her Queen in c2.';
var regexpCoordinates = /\w\d/g;
var find = [];
find.push(chessStory.match(regexpCoordinates));
// console.log(chessStory.match(regexpCoordinates));
console.log(find);
// expected output: Array [ 'a8', 'c2']
