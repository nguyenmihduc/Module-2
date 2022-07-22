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
    searchStudentWithGroup() {
    }
    sortStudentWithAgeUp() {
    }
    sortStudentWithAgeDown() {
    }
    updateStudent(indexUpdate, newInfo) {
        this.ListStudent[indexUpdate] = newInfo;
    }
    deleteStudent(index) {
        this.ListStudent.splice(index, 1);
    }
}
exports.ManagerStudent = ManagerStudent;
