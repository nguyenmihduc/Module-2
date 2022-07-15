import {Queue} from "./Queue";

let queue = new Queue()

queue.enqueue("A")
queue.enqueue("B")
queue.enqueue(1)
queue.enqueue(3)

console.log(queue.size())
queue.dequeue()
console.log(queue.size())
queue.showStorage()

