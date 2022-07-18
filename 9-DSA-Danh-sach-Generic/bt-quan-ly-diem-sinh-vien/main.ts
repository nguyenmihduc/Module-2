import {ManagerStudent} from "./managerScore";

let managerStudents = new ManagerStudent()

managerStudents.insertFirst("minh",9)
managerStudents.insertFirst("quan",10)
managerStudents.insertFirst("nam",11)
managerStudents.insertLast("thang",12)

console.log(managerStudents.showList())
// console.log(managerStudents.totalStudentsFail())
console.log(managerStudents.findMaxScore())