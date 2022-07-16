import {Student} from "./Student";
import {Manager} from "./Manager";

let student1 = new Student("A",2)
let student2 = new Student("B",1)
let student3 = new Student("C",5)
let student4 = new Student("D",1)
let student5 = new Student("E",3)
let student6 = new Student("G",7)
let student7 = new Student("H",6)

let managerStudent = new Manager()
managerStudent.addStudent(student1)
managerStudent.addStudent(student2)
managerStudent.addStudent(student3)
managerStudent.addStudent(student4)
managerStudent.addStudent(student5)
managerStudent.addStudent(student6)
managerStudent.addStudent(student7)

console.log(managerStudent.listStudents)

managerStudent.dequeue()
managerStudent.dequeue()
managerStudent.dequeue()
managerStudent.dequeue()
managerStudent.dequeue()
managerStudent.dequeue()
managerStudent.dequeue()
managerStudent.dequeue()
// console.log(managerStudent.dequeue())
// console.log(managerStudent.dequeue())
// console.log(managerStudent.dequeue())
// console.log(managerStudent.dequeue())
// console.log(managerStudent.dequeue())
// console.log(managerStudent.dequeue())

console.log(managerStudent.listStudents)
