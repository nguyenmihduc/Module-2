// function square(item) {
//     return item * item
// }
//  console.log(square(8))

let arr = [1,2,3,4,5,6,7]
// let square
// for (let i = 0; i < arr.length; i++) {
//     square = arr[i] * arr[i]
//     newArr.push(square)
// }
// console.log(newArr)
let square = (x) => x * x;
 function arrSq(func, arr) {
     let newArr = []
     arr.forEach((x) => {
         newArr.push(func(x))
     })
     return newArr
 }
console.log(arrSq(square,arr))