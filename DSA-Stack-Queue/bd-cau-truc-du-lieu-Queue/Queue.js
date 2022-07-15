"use strict";
exports.__esModule = true;
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue(capacity) {
        if (capacity === void 0) { capacity = Infinity; }
        this.capacity = capacity;
        this.storage = [];
    }
    Queue.prototype.dequeue = function () {
        return this.storage.shift();
    };
    Queue.prototype.enqueue = function (item) {
        if (this.size() === this.capacity) {
            throw Error("Queue has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    };
    Queue.prototype.size = function () {
        return this.storage.length;
    };
    Queue.prototype.showStorage = function () {
        console.log(this.storage);
    };
    return Queue;
}());
exports.Queue = Queue;
