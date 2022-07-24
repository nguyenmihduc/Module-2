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
exports.ManagerStudent = void 0;
const rl = __importStar(require("readline-sync"));
class ManagerStudent {
    constructor() {
        this.ListStudent = [];
        this.countOfName = 0;
        this.countOfAge = 0;
        this.countOfGroup = 0;
    }
    createNewStudent(student) {
        this.ListStudent.push(student);
    }
    showListStudent() {
        console.table(this.ListStudent);
    }
    searchStudentWithName(nameSearch) {
        let listNameSearch = [];
        this.ListStudent.forEach((item) => {
            if (nameSearch === item.name) {
                listNameSearch.push(item);
            }
        });
        if (listNameSearch.length != 0) {
            console.table(listNameSearch);
            console.log(`Hiện tại có ${listNameSearch.length} học viên tên là ${nameSearch}`);
        }
        else {
            console.log('<<<Tên học viên không tồn tại>>>');
            this.countOfName++;
            console.log(`Sai tên ${this.countOfName} lần`);
            if (this.countOfName < 3) {
                let nameSearchAgain = rl.question('Hãy nhập lại tên khác:');
                this.searchStudentWithName(nameSearchAgain);
            }
            else if (this.countOfName == 3) {
                for (let i = 0; i < this.ListStudent.length; i++) {
                    console.log(this.ListStudent[i].name);
                }
                let nameSearchAgain = rl.question('Hãy nhập lại tên trong gợi ý ở trên:');
                this.searchStudentWithName(nameSearchAgain);
            }
            else if (this.countOfName > 3) {
                console.log('<<<Tên học viên bạn cần tìm không tồn tại>>>');
                this.countOfName = 0;
            }
        }
    }
    searchStudentWithAge(ageSearch) {
        let listAgeSearch = [];
        this.ListStudent.forEach((item) => {
            if (ageSearch === item.age) {
                listAgeSearch.push(item);
            }
        });
        if (listAgeSearch.length != 0) {
            console.table(listAgeSearch);
        }
        else {
            console.log('Tuổi học viên không trùng khớp');
            this.countOfAge++;
            console.log(`Sai tuổi ${this.countOfAge} lần`);
            if (this.countOfAge < 3) {
                let ageSearchAgain = +rl.question('Hãy nhập lại tuổi khác:');
                this.searchStudentWithAge(ageSearchAgain);
            }
            else if (this.countOfAge == 3) {
                for (let i = 0; i < this.ListStudent.length; i++) {
                    console.log(this.ListStudent[i].age);
                }
                let ageSearchAgain = +rl.question('Hãy nhập tuổi với gợi ý ở trên:');
                this.searchStudentWithAge(ageSearchAgain);
            }
            else if (this.countOfAge > 3) {
                console.log('<<<Không tồn tại độ tuổi bạn cần tìm>>>');
                this.countOfAge = 0;
            }
        }
    }
    searchStudentWithGroup(groupSearch) {
        let listGroupSearch = [];
        this.ListStudent.forEach((item) => {
            if (groupSearch === item.group) {
                listGroupSearch.push(item);
            }
        });
        if (listGroupSearch.length != 0) {
            console.table(listGroupSearch);
        }
        else {
            console.log('Lớp không trùng khớp');
            this.countOfGroup++;
            console.log(`Sai lớp ${this.countOfGroup} lần`);
            if (this.countOfGroup < 3) {
                let groupSearchAgain = rl.question('Hãy nhập lại lớp khác:');
                this.searchStudentWithGroup(groupSearchAgain);
            }
            else if (this.countOfGroup == 3) {
                this.ListStudent.forEach((item) => {
                    console.log(item.group);
                });
                let groupSearchAgain = rl.question('Hãy nhập lớp với gợi ý ở trên:');
                this.searchStudentWithGroup(groupSearchAgain);
            }
            else if (this.countOfGroup > 3) {
                console.log('<<<Không tồn tại lớp bạn cần tìm>>>');
                this.countOfGroup = 0;
            }
        }
    }
    sortStudentWithAgeUp() {
        this.showListStudent();
    }
    sortStudentWithAgeDown() {
        this.showListStudent();
    }
    updateNameOfStudent(indexUpdate, nameUpdate) {
        this.ListStudent[indexUpdate].name = nameUpdate;
    }
    updateAgeOfStudent(indexUpdate, ageUpdate) {
        this.ListStudent[indexUpdate].age = ageUpdate;
    }
    updateEmailOfStudent(indexUpdate, emailUpdate) {
        this.ListStudent[indexUpdate].email = emailUpdate;
    }
    updateGroupOfStudent(indexUpdate, groupUpdate) {
        this.ListStudent[indexUpdate].group = groupUpdate;
    }
    deleteStudent(name) {
        this.searchStudentWithName(name);
        let countDelete = 0;
        let indexDelete = -1;
        let idDelete = rl.question('Nhập id của học viên muốn xóa:');
        this.ListStudent.forEach((item, index) => {
            if (idDelete === item.id) {
                indexDelete = index;
                countDelete++;
            }
        });
        if (countDelete != 0) {
            console.log(`<<<Bạn đã xóa Học viên tên: ${this.ListStudent[indexDelete].name}, ${this.ListStudent[indexDelete].age} tuổi, lớp: ${this.ListStudent[indexDelete].group}, id: ${this.ListStudent[indexDelete].id} thành công>>>`);
            this.ListStudent.splice(indexDelete, 1);
        }
        else {
            console.log("<<<id không tồn tại, hãy chọn thao tác khác>>>");
        }
    }
}
exports.ManagerStudent = ManagerStudent;
