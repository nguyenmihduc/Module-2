import {Stack} from "./Stack";

let stack = new Stack(5)

stack.push(['ab','dasj'])
stack.push(12312)
stack.push('asdsc')
stack.push(['wqd', 1234])

stack.showStorage()
console.log(stack.size())

console.log(stack.pop())

stack.showStorage()
// console.log(stack.size())
//
// stack.peek()
// stack.peek();
// stack.size();
// stack.pop();
// stack.size();