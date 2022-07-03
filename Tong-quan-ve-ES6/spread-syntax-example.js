// function sum(x, y, z) {
//     return x + y + z;
// }
// const numbers = [4,8,5]
// console.log(sum(...numbers))
//
// let a = [1,2]
// let b = [6,7,8]
// a.push(...b)
// console.log(a)

// let a = [1,2]
// let b = [6,7,8]
// a = [...b]
// console.log(a)
//
// let obj1 = {
//     a: 1,
//     b:2
// }
// let onj2 = {...obj1}
// console.log(obj1)

let a = [1,2,"ABC"]
let b = [6,7,8]
c = [...a,...b]
console.log(c)
