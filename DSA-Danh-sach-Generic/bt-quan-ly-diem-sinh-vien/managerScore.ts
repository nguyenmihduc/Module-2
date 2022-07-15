import {Node} from "./classNode";

export class ManagerStudent<T>{
    head: Node<T> | null;
    tail: Node<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insertFirst(name: T, score: number):void {
        let node = new Node(name, score);
        node.next = this.head;
        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }
        this.size++
    }
    insertLast(name: T, score: number):void {
        if(!this.head) {
            this.insertFirst(name, score);
        } else {
            let node = new Node(name, score);
            this.tail.next = node;
            this.tail = node;
            this.size++
        }

    }
    showList(): T[] {
        let listStudents = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            listStudents.push(currentNode.readData());
            currentNode = currentNode.next
        }
        return listStudents;
    }
    totalStudentsFail() {
        let total = 0
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.score <= 5) {
                total ++
            }
            currentNode = currentNode.next
        }
        return total
    }
    listStudentMaxScore() {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.getScore() == this.findMaxScore()) {
                console.log(currentNode.getName())
            }
            currentNode = currentNode.next;
        }
    }

    findMaxScore() {
        let currentNode = this.head;
        let max = 0
        while (currentNode !== null) {
            if (max < currentNode.getScore()) {
                max = currentNode.getScore()
            }
            currentNode = currentNode.next;
        }
        return max;
    }
}