"use strict";
exports.__esModule = true;
var StudentScoreManagement_1 = require("./StudentScoreManagement");
var studentList = new StudentScoreManagement_1.StudentScoreManagement();
studentList.insertFirst('Ngo Minh Ngoc', 9);
studentList.insertFirst('Pham Thanh Thao', 4);
studentList.insertLast('Tan', 6);
studentList.insertFirst('Toan', 7);
// console.log(studentList.showList())
// console.log(studentList.getSize())
// console.log('---Số lượng học sinh dưới 5 điểm là---')
// console.log(studentList.totalStudentFail())
// console.log('--------')
console.log(studentList.findMaxScore());
// console.log('--------')
studentList.listStudentMaxScore();
// console.log('---------')
// studentList.findByName('Tan')
