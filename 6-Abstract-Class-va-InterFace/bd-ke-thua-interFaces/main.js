// interface Person {
//     name:string
// }
// interface PersonDetail {
//     age:number
//     gender:string
// }
// interface Employee extends Person, PersonDetail {
//     empCode:number
// }
// let empObject: Employee = {
//     name : "minh duc",
//     age : 25,
//     gender : "Male",
//     empCode : 43,
// };
//
//
// console.log("Name: " + empObject.name);
// console.log("Employee Code: " +empObject.empCode);
var empObject = {
    name: 'hahaha',
    age: 88,
    gender: "FeMale",
    empCode: 77
};
console.log(empObject);
empObject.name = "Abhishek";
empObject.age = 25;
empObject.gender = "Male";
empObject.empCode = 43;
console.table(empObject);
