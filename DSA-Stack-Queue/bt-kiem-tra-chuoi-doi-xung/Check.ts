import {Stack} from "./Stack";
import {Queue} from "./Queue";

export class CheckSymmetry {
    string: string;
    array: any[] = [];
    stack;
    queue;
    constructor(string: string) {
        this.string = string;
        this.array = string.split('');
        this.stack = new Stack();
        this.queue = new Queue();
    }
    addToStackAndQueue() {
        this.array.forEach((item) => {
            this.stack.push(item);
            this.queue.enqueue(item);
        })
    }
    check() {
        this.addToStackAndQueue();
        let count = 0;
        for (let i = 0; i < this.array.length; i++) {
            if (this.stack.pop() === this.queue.dequeue()) {
                count++;
            }
        }
        if (count == this.array.length) {
            console.log(this.string + " Là chuỗi đối xứng");
        } else {
            console.log(this.string + " Không phải chuỗi đối xứng");
        }
    }
}


