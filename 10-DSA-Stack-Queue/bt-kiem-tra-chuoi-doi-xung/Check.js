"use strict";
exports.__esModule = true;
exports.CheckSymmetry = void 0;
var Stack_1 = require("./Stack");
var Queue_1 = require("./Queue");
var CheckSymmetry = /** @class */ (function () {
    function CheckSymmetry(string) {
        this.array = [];
        this.string = string;
        this.array = string.split('');
        this.stack = new Stack_1.Stack();
        this.queue = new Queue_1.Queue();
    }
    CheckSymmetry.prototype.addToStackAndQueue = function () {
        var _this = this;
        this.array.forEach(function (item) {
            _this.stack.push(item);
            _this.queue.enqueue(item);
        });
    };
    CheckSymmetry.prototype.check = function () {
        this.addToStackAndQueue();
        var count = 0;
        for (var i = 0; i < this.array.length; i++) {
            if (this.stack.pop() === this.queue.dequeue()) {
                count++;
            }
        }
        if (count == this.array.length && count > 1) {
            console.log(this.string + " Là chuỗi đối xứng");
        }
        else {
            console.log(this.string + " Không phải chuỗi đối xứng");
        }
    };
    return CheckSymmetry;
}());
exports.CheckSymmetry = CheckSymmetry;
