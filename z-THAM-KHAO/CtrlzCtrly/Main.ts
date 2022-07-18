import { Stack } from "./StackClass";
// stack 1 chứa các phần từ CtrlZ
let stack1 = new Stack();

// stack 2 chứa các phần tử để CtrlY
let stack2 = new Stack();

stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);

function ctrlZ(){
    let data = stack1.pop(); // Đây là CtrlZ
    // Phần tử vừa xoá ra sẽ đc thêm vào stack2 để mình có thể redo (CtrlY)
    stack2.push(data); 
}

function ctrlY(){
    let data = stack2.pop(); // Đây là CtrlY
    // Phần tử vừa xoá ra sẽ đc thêm vào stack1 để mình có thể undo (CtrlZ)
    stack1.push(data); 
}

console.log(stack1);
console.log(stack2);

ctrlZ();
ctrlZ();

console.log(stack1);
console.log(stack2);

ctrlY();

console.log(stack1);
console.log(stack2);

