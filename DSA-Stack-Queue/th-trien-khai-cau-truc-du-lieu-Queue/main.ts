import {Queue} from "./Queue";

let queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue("F")
queue.enqueue("G")
queue.enqueue("H")

console.log(queue.size())

console.log(queue.dequeue())

console.log(queue.size())

console.log(queue.container)