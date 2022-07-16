"use strict";
exports.__esModule = true;
var Student_1 = require("./Student");
var Manager_1 = require("./Manager");
var student1 = new Student_1.Student("A", 2);
var student2 = new Student_1.Student("B", 1);
var student3 = new Student_1.Student("C", 5);
var student4 = new Student_1.Student("D", 1);
var student5 = new Student_1.Student("E", 3);
var student6 = new Student_1.Student("G", 7);
var student7 = new Student_1.Student("H", 6);
var managerStudent = new Manager_1.Manager();
managerStudent.addStudent(student1);
managerStudent.addStudent(student2);
managerStudent.addStudent(student3);
managerStudent.addStudent(student4);
managerStudent.addStudent(student5);
managerStudent.addStudent(student6);
managerStudent.addStudent(student7);
console.log(managerStudent.listStudents);
managerStudent.dequeue();
managerStudent.dequeue();
managerStudent.dequeue();
managerStudent.dequeue();
managerStudent.dequeue();
managerStudent.dequeue();
managerStudent.dequeue();
managerStudent.dequeue();
// console.log(managerStudent.dequeue())
// console.log(managerStudent.dequeue())
// console.log(managerStudent.dequeue())
// console.log(managerStudent.dequeue())
// console.log(managerStudent.dequeue())
// console.log(managerStudent.dequeue())
console.log(managerStudent.listStudents);
