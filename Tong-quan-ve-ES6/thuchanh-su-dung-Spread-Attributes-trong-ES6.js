// const cars1 = ['AUDI', 'BMW', 'TATA', 'MERCEDES']
// const cars2 = [...cars1]
// const cars3 = [...cars1,'NISAN', 'TOYOTA']

// console.log(cars1)
// console.log(cars2)
// console.log(cars3)

// const cars1 = ['AUDI', 'BMW', 'TATA', 'MERCEDES']
// const cars2 = ['NISAN', 'TOYOTA']
// const cars3 = [...cars1,...cars2]
// console.log(cars3)

// const cars1 = {
//     Brand: "BMW",
//     Color: "red"
// }
// const cars2 = {...cars1}
// console.log(cars2)

// const cars1 = {
//     Brand: "BMW",
//     Color: "red"
// }
// const cars2 = {
//     Brand: "Nissan",
//     Color: "blue",
//     Year: 2004
// }
// const cars3 = {...cars1,...cars2}
// console.log(cars3)

// const car = "AUDI"
// const a = [...car]
// console.log(a)

const numbers = [3,5,7,8,9]
const [a,b,c,...others] = numbers
console.log(a)
console.log(b)
console.log(c)
console.log(others)