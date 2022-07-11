"use strict";
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(elements, size) {
        this.elements = [];
        this.elements = elements;
        this.size = size;
    }
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.elements.length === this.size;
    };
    Stack.prototype.push = function (element) {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        else {
            this.elements.push(element);
        }
    };
    Stack.prototype.pop = function () {
        if (this.elements.length === 0) {
            throw new Error('the stack is empty');
        }
        return this.elements.pop();
    };
    return Stack;
}());
exports.Stack = Stack;
