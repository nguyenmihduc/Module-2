"use strict";
exports.__esModule = true;
var Queue_1 = require("./Queue");
var queue = new Queue_1.Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue(1);
queue.enqueue(3);
console.log(queue.size());
queue.dequeue();
console.log(queue.size());
queue.showStorage();
