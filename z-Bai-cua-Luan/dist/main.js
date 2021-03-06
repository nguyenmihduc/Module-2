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
let student1 = new Student_1.Student('Duc', 35, 'Duc@gmail.com', 'C05', Student_1.Student.IdOfStudent());
let student2 = new Student_1.Student('Bao', 30, 'Bao@gmail.com', 'C04', Student_1.Student.IdOfStudent());
let student3 = new Student_1.Student('Tung', 45, 'Tung@gmail.com', 'C03', Student_1.Student.IdOfStudent());
let student4 = new Student_1.Student('Ngoc', 32, 'Ngoc@gmail.com', 'C02', Student_1.Student.IdOfStudent());
let student5 = new Student_1.Student('Thao', 36, 'Thao@gmail.com', 'C01', Student_1.Student.IdOfStudent());
let student6 = new Student_1.Student('Thanh', 32, 'Thanh@gmail.com', 'C01', Student_1.Student.IdOfStudent());
let student7 = new Student_1.Student('Duc', 26, 'minhDuc@gmail.com', 'C04', Student_1.Student.IdOfStudent());
managerStudent.createNewStudent(student1);
managerStudent.createNewStudent(student2);
managerStudent.createNewStudent(student3);
managerStudent.createNewStudent(student4);
managerStudent.createNewStudent(student5);
managerStudent.createNewStudent(student6);
managerStudent.createNewStudent(student7);
let choice;
function inputStudent() {
    let name = rl.question('Nh???p t??n h???c vi??n:');
    let age = +rl.question('Nh???p tu???i h???c vi??n:');
    let email = rl.question('Nh???p email h???c vien:');
    let group = rl.question('Nh???p l???p c???a h???c vi??n:');
    let id = Student_1.Student.IdOfStudent();
    return new Student_1.Student(name, age, email, group, id);
}
function showMenuAll() {
    console.log('---CH????NG TR??NH QU???N L?? H???C VI??N---');
    console.log('1. T???O M???I H???C VI??N:');
    console.log('2. HI???N TH??? DANH S??CH H???C VI??N:');
    console.log('3. T??M KI???M H???C VI??N:');
    console.log('4. S???P X???P H???C VI??N:');
    console.log('5. S???A TH??NG TIN H???C VI??N:');
    console.log('6. X??A H???C VI??N:');
    console.log('0. THO??T CH????NG TR??NH:');
}
function showCreateStudent() {
    let student = inputStudent();
    managerStudent.createNewStudent(student);
}
function showAllListStudent() {
    managerStudent.showListStudent();
}
function showMenuSearch() {
    console.log('3.1---T??m ki???m theo t??n:');
    console.log('3.2---T??m ki???m theo tu???i:');
    console.log('3.3---T??m ki???m theo l???p:');
    console.log('3.4---Back---');
}
function showSearchWithName() {
    let nameSearch = rl.question('Nh???p t??n mu???n t??m:');
    managerStudent.searchStudentWithName(nameSearch);
}
function showSearchWithAge() {
    let ageSearch = +rl.question('Nh???p tu???i mu???n t??m:');
    managerStudent.searchStudentWithAge(ageSearch);
}
function showSearchWithGroup() {
    let groupSearch = rl.question('Nh???p l???p mu???n t??m:');
    managerStudent.searchStudentWithGroup(groupSearch);
}
function showSearchStudent() {
    let choiceSearch;
    do {
        showMenuSearch();
        choiceSearch = +rl.question('Nh???p l???a ch???n t??m ki???m c???a b???n:');
        switch (choiceSearch) {
            case 1: {
                console.log('3.1---T??m ki???m theo t??n:');
                showSearchWithName();
                break;
            }
            case 2: {
                console.log('3.2---T??m ki???m theo tu???i:');
                showSearchWithAge();
                break;
            }
            case 3: {
                console.log('3.3---T??m ki???m theo l???p:');
                showSearchWithGroup();
                break;
            }
        }
    } while (choiceSearch != 4);
}
do {
    showMenuAll();
    choice = +rl.question('Nh???p l???a ch???n c???a b???n:');
    switch (choice) {
        case 1: {
            console.log('1. T???O M???I H???C VI??N:');
            showCreateStudent();
            break;
        }
        case 2: {
            console.log('2. HI???N TH??? DANH S??CH H???C VI??N:');
            showAllListStudent();
            break;
        }
        case 3: {
            console.log('3. T??M KI???M H???C VI??N:');
            showSearchStudent();
            break;
        }
        case 4: {
            let choiceSort;
            do {
                console.log('4. S???P X???P H???C VI??N:');
                console.log('4.1---S???p x???p theo ????? tu???i t??ng d???n');
                console.log('4.2---S???p x???p theo ????? tu???i gi???m d???n');
                console.log('4.3---Back---');
                choiceSort = +rl.question('Nh???p l???a ch???n c???a b???n:');
                switch (choiceSort) {
                    case 1: {
                        console.log('4.1---S???p x???p theo ????? tu???i t??ng d???n');
                        let temp;
                        for (let i = 0; i < managerStudent.ListStudent.length; i++) {
                            for (let j = i; j < managerStudent.ListStudent.length; j++) {
                                if (managerStudent.ListStudent[i].age > managerStudent.ListStudent[j].age) {
                                    temp = managerStudent.ListStudent[i];
                                    managerStudent.ListStudent[i] = managerStudent.ListStudent[j];
                                    managerStudent.ListStudent[j] = temp;
                                }
                            }
                        }
                        managerStudent.sortStudentWithAgeUp();
                        break;
                    }
                    case 2: {
                        console.log('4.2---S???p x???p theo ????? tu???i gi???m d???n');
                        let temp;
                        for (let i = 0; i < managerStudent.ListStudent.length; i++) {
                            for (let j = i; j < managerStudent.ListStudent.length; j++) {
                                if (managerStudent.ListStudent[i].age < managerStudent.ListStudent[j].age) {
                                    temp = managerStudent.ListStudent[i];
                                    managerStudent.ListStudent[i] = managerStudent.ListStudent[j];
                                    managerStudent.ListStudent[j] = temp;
                                }
                            }
                        }
                        managerStudent.sortStudentWithAgeDown();
                        break;
                    }
                }
            } while (choiceSort != 3);
            break;
        }
        case 5: {
            console.log('5. S???A TH??NG TIN H???C VI??N:');
            let nameNeedUpdate = rl.question('Nh???p t??n h???c vi??n c???n ch???nh s???a:');
            managerStudent.searchStudentWithName(nameNeedUpdate);
            let countUpdate = 0;
            let indexUpdate = -1;
            let idUpdate = rl.question('Nh???p id h???c vi??n c???n ch???nh s???a:');
            managerStudent.ListStudent.forEach((item, index) => {
                if (idUpdate === item.id) {
                    countUpdate++;
                    indexUpdate = index;
                }
            });
            if (countUpdate == 0) {
                console.log("<<<id kh??ng t???n t???i, h??y ch???n thao t??c kh??c>>>");
            }
            else if (countUpdate != 0) {
                let choiceUpdate;
                do {
                    console.table(managerStudent.ListStudent[indexUpdate]);
                    console.log('5.1--- Ch???nh s???a t??n:');
                    console.log('5.2--- Ch???nh s???a tu???i:');
                    console.log('5.3--- Ch???nh s???a email:');
                    console.log('5.4--- Ch???nh s???a l???p:');
                    console.log('5.5--- Back---');
                    choiceUpdate = +rl.question('Nh???p l???a ch???n ch???nh s???a c???a b???n:');
                    switch (choiceUpdate) {
                        case 1: {
                            console.log('5.1--- Ch???nh s???a t??n:');
                            let nameUpdate = rl.question('Nh???p t??n m???i:');
                            managerStudent.updateNameOfStudent(indexUpdate, nameUpdate);
                            break;
                        }
                        case 2: {
                            console.log('5.2--- Ch???nh s???a tu???i:');
                            let ageUpdate = +rl.question('Nh???p tu???i m???i:');
                            managerStudent.updateAgeOfStudent(indexUpdate, ageUpdate);
                            break;
                        }
                        case 3: {
                            console.log('5.3--- Ch???nh s???a email:');
                            let emailUpdate = rl.question('Nh???p email m???i:');
                            managerStudent.updateEmailOfStudent(indexUpdate, emailUpdate);
                            break;
                        }
                        case 4: {
                            console.log('5.4--- Ch???nh s???a l???p:');
                            let groupUpdate = rl.question('Nh???p l???p m???i:');
                            managerStudent.updateGroupOfStudent(indexUpdate, groupUpdate);
                            break;
                        }
                    }
                } while (choiceUpdate != 5);
            }
            break;
        }
        case 6: {
            console.log('6. X??A H???C VI??N:');
            let nameDelete = rl.question('Nh???p t??n h???c vi??n mu???n x??a:');
            managerStudent.deleteStudent(nameDelete);
            break;
        }
        default:
            break;
    }
} while (choice != 0);
