import {Stack} from "./Stack";

export class Reverse {
    array: number[];
    stack;
    constructor(array: number[]) {
        this.array = array
        this.stack = new Stack()
    }
    pushToStack() {
        this.array.forEach((item) => {
            this.stack.push(item)
        })
    }
    reverser() {
        this.pushToStack()
        for (let i = 0; i < this.array.length; i++) {
            this.array[i] = this.stack.pop()
        }
    }

}