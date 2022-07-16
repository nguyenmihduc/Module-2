import {Student} from "./Student";

export class Manager {
    listStudents: any[] = []
    constructor() {
    }
    addStudent(student) {
        this.listStudents.push(student)
    }
    dequeue() {
        if(this.listStudents.length == 0) {
            return null
        }

        let min = this.listStudents[0]
        let minIndex = -1;
        for (let i = 0; i < this.listStudents.length; i++) {
            if (this.listStudents[i].score <= min.score) {
                min = this.listStudents[i]
                minIndex = i
            }
        }
        console.log(this.listStudents.splice(minIndex,1))
    }
}