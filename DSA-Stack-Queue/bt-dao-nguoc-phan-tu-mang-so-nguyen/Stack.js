"use strict";
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.container = [];
    }
    Stack.prototype.push = function (item) {
        this.container.push(item);
    };
    Stack.prototype.pop = function () {
        return this.container.pop();
    };
    Stack.prototype.size = function () {
        return this.container.length;
    };
    return Stack;
}());
exports.Stack = Stack;
