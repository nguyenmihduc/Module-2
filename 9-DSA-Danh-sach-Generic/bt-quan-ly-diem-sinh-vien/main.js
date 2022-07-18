"use strict";
exports.__esModule = true;
var managerScore_1 = require("./managerScore");
var managerStudents = new managerScore_1.ManagerStudent();
managerStudents.insertFirst("minh", 9);
managerStudents.insertFirst("quan", 10);
managerStudents.insertFirst("nam", 11);
managerStudents.insertLast("thang", 12);
console.log(managerStudents.showList());
// console.log(managerStudents.totalStudentsFail())
console.log(managerStudents.findMaxScore());
