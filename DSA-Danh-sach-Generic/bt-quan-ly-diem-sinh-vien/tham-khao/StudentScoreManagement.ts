import {Node} from "./Node";

export class StudentScoreManagement<T> {
    head: Node<T> | null;
    tail: Node<T> | null;

    size: number;

    studentList: any[] = [];

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(name: string, score: number): void {
        let node = new Node(name, score);
        node.next = this.head;
        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    }

    insertLast(name: string, score: number): void {
        if (!this.head) {
            this.insertFirst(name, score);
        } else {
            let node = new Node(name, score);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }

    showList() {
        let currentNode = this.head;

        while (currentNode !== null) {
            this.studentList.push(currentNode.getInfo());
            currentNode = currentNode.next;
        }
        return this.studentList

    }

    getSize(): number {
        return this.size;
    }

    totalStudentFail() {
        let currentNode = this.head;
        let count = 0;
        for (let i = 0; i < this.studentList.length; i++) {
            if (currentNode.getScore() <= 5) {
                count++;
            }
            currentNode = currentNode.next;
        }
        return count;
    }

    listStudentMaxScore() {
        let currentNode = this.head;
        for (let i = 0; i < this.studentList.length; i++) {
            if (this.findMaxScore() === currentNode.getScore()) {
                console.log(currentNode.getName());
            }
            currentNode = currentNode.next;
        }
    }

    findMaxScore(): number {
        let currentNode = this.head;
        let max = currentNode.getScore();
        for (let i = 0; i < this.studentList.length; i++) {
            if (currentNode.next.getScore() > max) {
                max = currentNode.next.getScore();
                currentNode = currentNode.next;
            }
        }
        return max;
    }

    findByName(name: string) {
        let currentNode = this.head;

        for (let i = 0; i < this.studentList.length; i++) {
            if (currentNode.getName() === name) {
                console.log(currentNode.getInfo())
            }
            currentNode = currentNode.next;
        }
    }
}