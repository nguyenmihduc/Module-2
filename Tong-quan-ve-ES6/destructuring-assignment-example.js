// let name = ["Lan", "Hoa", "Tuan", "Vinh"]
// let [firstName, secondName] = name
// console.log(firstName)
// console.log(secondName)

// let [firstName,secondName] = ["Lan", "Hoa", "Tuan", "Vinh"]
// console.log(firstName)
// console.log(secondName)

// let [firstName,,secondName] = ["Lan", "Hoa", "Tuan", "Vinh"]
// console.log(firstName)
// console.log(secondName)

// let [firstName,,...secondName] = ["Lan", "Hoa", "Tuan", "Vinh"]
// console.log(firstName)
// console.log(secondName)

// let [firstName, secondName] = ["Lan", "Hoa", "Tuan", "Vinh"]
// console.log(firstName);
// console.log(secondName);
//     [firstName, secondName] = [secondName, firstName];
// console.log(firstName);
// console.log(secondName);

// let [firstName, secondName] = ["Lan", "Hoa", "Tuan", "Vinh"]
// console.log(firstName);
// console.log(secondName);
// [firstName, secondName] = [secondName, firstName];
// console.log(firstName);
// console.log(secondName);

// function NameList() {
//    return ["Lan", "Hoa", "Tuan", "Vinh"]
// }
// let [firstName, secondName] = NameList()
// console.log(firstName);
// console.log(secondName);

// let study = {
//    name: "john",
//    age: 32,
//    sucKhoe: "tot"
// };
// const {name, age, sucKhoe} = study;
// console.log(name);
// console.log(age);
// console.log(sucKhoe);

const marks = {
   section1: { alpha: 15, beta: 34},
   section2: { alpha: 25, beta: 64}
}
const { section1: { alpha: alpha1, beta: beta1}} = marks
console.log(alpha1)
console.log(beta1)