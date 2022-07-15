"use strict";
exports.__esModule = true;
exports.Reverse = void 0;
var Stack_1 = require("./Stack");
var Reverse = /** @class */ (function () {
    function Reverse(array) {
        this.array = array;
        this.stack = new Stack_1.Stack();
    }
    Reverse.prototype.pushToStack = function () {
        var _this = this;
        this.array.forEach(function (item) {
            _this.stack.push(item);
        });
    };
    Reverse.prototype.reverser = function () {
        this.pushToStack();
        for (var i = 0; i < this.array.length; i++) {
            this.array[i] = this.stack.pop();
        }
    };
    return Reverse;
}());
exports.Reverse = Reverse;
