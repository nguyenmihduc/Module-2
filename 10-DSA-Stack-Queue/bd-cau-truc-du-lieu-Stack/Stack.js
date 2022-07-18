"use strict";
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(capacity) {
        this.storage = [];
        this.capacity = capacity;
    }
    Stack.prototype.peek = function () {
        console.log(this.storage[this.size() - 1]);
    };
    Stack.prototype.pop = function () {
        return this.storage.pop();
    };
    Stack.prototype.push = function (item) {
        if (this.size() === this.capacity) {
            throw Error("Stack has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    };
    Stack.prototype.size = function () {
        return this.storage.length;
    };
    Stack.prototype.showStorage = function () {
        console.log(this.storage);
    };
    return Stack;
}());
exports.Stack = Stack;
