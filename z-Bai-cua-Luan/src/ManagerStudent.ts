import {Student} from "./Student";
import * as rl from 'readline-sync'

export class ManagerStudent {
    public ListStudent: Student[] = []
    public countOfName: number =0;
    public countOfAge: number =0;
    public countOfGroup: number =0;
    constructor() {
    }
    createNewStudent(student: Student) {
        this.ListStudent.push(student);
    }
    showListStudent() {
       console.table(this.ListStudent)
    }
    searchStudentWithName(nameSearch: string) {
        let listNameSearch: Student[] = []
        this.ListStudent.forEach((item) => {
            if (nameSearch === item.name) {
                listNameSearch.push(item)
            }
        })
        if (listNameSearch.length != 0) {
            console.table(listNameSearch)
        } else {
            console.log('<<<Tên học viên không tồn tại>>>')
            this.countOfName++
            console.log(`Sai tên ${this.countOfName} lần`)
            if (this.countOfName < 3) {
                let nameSearchAgain = rl.question('Hãy nhập lại tên khác:')
                this.searchStudentWithName(nameSearchAgain)
            }
            else if (this.countOfName == 3 ) {
                for (let i = 0; i < this.ListStudent.length; i++) {
                    console.log(this.ListStudent[i].name)
                }
                let nameSearchAgain = rl.question('Hãy nhập lại tên trong gợi ý ở trên:')
                this.searchStudentWithName(nameSearchAgain)
            }
            else if (this.countOfName > 3) {
                console.log('<<<Tên học viên bạn cần tìm không tồn tại>>>')
                this.countOfName = 0;
            }
        }
    }


    searchStudentWithAge(ageSearch: number) {
        let listAgeSearch: Student[] = [];
        this.ListStudent.forEach((item) => {
            if (ageSearch === item.age) {
                listAgeSearch.push(item)
            }
        })
        if (listAgeSearch.length != 0) {
            console.table(listAgeSearch);
        } else {
            console.log('Tuổi học viên không trùng khớp')
            this.countOfAge++;
            console.log(`Sai tuổi ${this.countOfAge} lần`);
            if (this.countOfAge < 3) {
                let ageSearchAgain = +rl.question('Hãy nhập lại tuổi khác:')
                this.searchStudentWithAge(ageSearchAgain)
            }
            else if (this.countOfAge == 3) {
                for (let i = 0; i < this.ListStudent.length; i++) {
                    console.log(this.ListStudent[i].age)
                }
                let ageSearchAgain = +rl.question('Hãy nhập tuổi với gợi ý ở trên:')
                this.searchStudentWithAge(ageSearchAgain)
            }
            else if (this.countOfAge > 3) {
                console.log('<<<Không tồn tại độ tuổi bạn cần tìm>>>')
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
    updateStudent(indexUpdate: number, newInfo: Student) {
        this.ListStudent[indexUpdate] = newInfo
    }
    deleteStudent(index: number) {
        this.ListStudent.splice(index,1)
    }
}