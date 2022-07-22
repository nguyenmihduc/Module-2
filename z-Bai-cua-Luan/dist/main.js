"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rl = __importStar(require("readline-sync"));
const Student_1 = require("./src/Student");
const ManagerStudent_1 = require("./src/ManagerStudent");
let managerStudent = new ManagerStudent_1.ManagerStudent();
let student1 = new Student_1.Student('Duc', 35, 'Duc@gmail.com', 'C05', 'A1');
let student2 = new Student_1.Student('Bao', 30, 'Bao@gmail.com', 'C04', 'A2');
let student3 = new Student_1.Student('Tung', 45, 'Tung@gmail.com', 'C03', 'A3');
let student4 = new Student_1.Student('Ngoc', 32, 'Ngoc@gmail.com', 'C02', 'A4');
let student5 = new Student_1.Student('Thao', 36, 'Thao@gmail.com', 'C01', 'A6');
let student6 = new Student_1.Student('Thanh', 32, 'Thanh@gmail.com', 'C01', 'A7');
let student7 = new Student_1.Student('Duc', 26, 'minhDuc@gmail.com', 'C04', 'A8');
managerStudent.createNewStudent(student1);
managerStudent.createNewStudent(student2);
managerStudent.createNewStudent(student3);
managerStudent.createNewStudent(student4);
managerStudent.createNewStudent(student5);
managerStudent.createNewStudent(student6);
managerStudent.createNewStudent(student7);
// managerStudent.showListStudent()
let choice;
function inputStudent() {
    console.log('1. TẠO MỚI HỌC VIÊN:');
    let name = rl.question('Nhập tên học viên:');
    let age = +rl.question('Nhập tuổi học viên:');
    let email = rl.question('Nhập email học vien:');
    let group = rl.question('Nhập lớp của học viên:');
    let id = rl.question('Nhập ID học viên:');
    return new Student_1.Student(name, age, email, group, id);
}
function showMenuAll() {
    console.log('---CHƯƠNG TRÌNH QUẢN LÝ HỌC VIÊN---');
    console.log('1. TẠO MỚI HỌC VIÊN:');
    console.log('2. HIỂN THỊ DANH SÁCH HỌC VIÊN:');
    console.log('3. TÌM KIẾM HỌC VIÊN:');
    console.log('4. SẮP XẾP HỌC VIÊN:');
    console.log('5. SỬA THÔNG TIN HỌC VIÊN:');
    console.log('6. XÓA HỌC VIÊN:');
    console.log('0. THOÁT CHƯƠNG TRÌNH:');
}
function showCreateStudent() {
    let student = inputStudent();
    managerStudent.createNewStudent(student);
}
function showAllListStudent() {
    console.log('2. HIỂN THỊ DANH SÁCH HỌC VIÊN:');
    managerStudent.showListStudent();
}
function showMenuSearch() {
    console.log('3. TÌM KIẾM HỌC VIÊN:');
    console.log('3.1---Tìm kiếm theo tên:');
    console.log('3.2---Tìm kiếm theo tuổi:');
    console.log('3.3---Tìm kiếm theo lớp:');
    console.log('3.4---Back---');
}
function showSearchWithName() {
    console.log('3.1---Tìm kiếm theo tên:');
    let nameSearch = rl.question('Nhập tên muốn tìm:');
    managerStudent.searchStudentWithName(nameSearch);
}
function showSearchWithAge() {
    console.log('3.2---Tìm kiếm theo tuổi:');
    let ageSearch = +rl.question('Nhập tuổi muốn tìm:');
    managerStudent.searchStudentWithAge(ageSearch);
}
function showSearchWithGroup() {
    console.log('3.3---Tìm kiếm theo lớp:');
    let groupSearch = rl.question('Nhập lớp muốn tìm:');
    managerStudent.searchStudentWithGroup(groupSearch);
}
function showSearchStudent() {
    let choiceSearch;
    do {
        showMenuSearch();
        choiceSearch = +rl.question('Nhập lựa chọn tìm kiếm của bạn:');
        switch (choiceSearch) {
            case 1: {
                showSearchWithName();
                break;
            }
            case 2: {
                showSearchWithAge();
                break;
            }
            case 3: {
                showSearchWithGroup();
                break;
            }
        }
    } while (choiceSearch != 4);
}
do {
    showMenuAll();
    choice = +rl.question('Nhập lựa chọn của bạn:');
    switch (choice) {
        case 1: {
            showCreateStudent();
            break;
        }
        case 2: {
            showAllListStudent();
            break;
        }
        case 3: {
            showSearchStudent();
            break;
        }
        case 4: {
            console.log('4. SẮP XẾP HỌC VIÊN:');
            break;
        }
        case 5: {
            console.log('5. SỬA THÔNG TIN HỌC VIÊN:');
            let indexUpdate = +rl.question('Nhập vị trí cần chỉnh sửa:');
            let newInfo = inputStudent();
            managerStudent.updateStudent(indexUpdate, newInfo);
            break;
        }
        case 6: {
            console.log('6. XÓA HỌC VIÊN:');
            let indexDelete = +rl.question('Nhập vị trí học viên cần xóa:');
            managerStudent.deleteStudent(indexDelete);
            break;
        }
        default:
            break;
    }
} while (choice != 0);
