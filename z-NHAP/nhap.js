"use strict";
// let arrayA: number[] = [1,3,6,2,7,8,33,66,8,2,121,46,6,8,]
// let arrayB: number[] = [1,6,2,76,211,66,3,24,8,]
// let newArray: number[] = []
//
// // for (let i = 0; i < arrayA.length; i++) {
// //     arrayB.forEach((item,index) => {
// //         if (item === arrayA[i]) {
// //             newArray.push(item)
// //         }
// //     })
// // }
//
// for (let i = 0; i < arrayA.length; i++) {
//     for (let j = 0; j < arrayB.length; j++) {
//         if (arrayB[j] === arrayA[i]) {
//             newArray.push(arrayB[j])
//         }
//     }
// }
//
// console.log(newArray)
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.container = [];
    }
    Stack.prototype.push = function (item) {
        this.container.push(item);
    };
    Stack.prototype.pope = function () {
        var x = this.container.push("a");
        var y = this.container.push("c");
        var l = this.container.push("c");
        var k = this.container.push("c");
        var p = this.container.push("c");
        for (var i = 1; i < 3; i++) {
            if (this.container.pop() === this.container.pop()) {
                console.log('hahaha');
            }
            else {
                console.log('huhuhu');
            }
        }
        // return this.container.pop()
    };
    Stack.prototype.size = function () {
        return this.container.length;
    };
    return Stack;
}());
exports.Stack = Stack;
var stack1 = new Stack();
var stack2 = new Stack();
// stack1.push(1)
// stack1.push(2)
// stack1.push(3)
// stack1.push(4)
stack1.pope();
console.log(stack1);
// console.log(stack1)
// stack1.ctrlZ(stack2)
// stack1.ctrlZ(stack2)
//
//
// console.log(stack1)
// console.log(stack2)
//
// stack1.ctrlShiftZ(stack2)
// stack1.ctrlShiftZ(stack2)
//
// console.log(stack1)
// console.log(stack2)
//
// stack2.ctrlShiftZ(stack1)
// stack2.ctrlShiftZ(stack1)
// stack2.ctrlShiftZ(stack1)
//
// console.log(stack1)
// console.log(stack2)
