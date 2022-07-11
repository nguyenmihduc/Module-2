import {Stack} from "./Stack";

let words = 'The quick brown fox jumps over the lazy dog'.split(' ');
let wordsStack = new Stack<string>([],  words.length)

words.forEach(word => wordsStack.push(word))
console.log(wordsStack)

while (!wordsStack.isEmpty()) {
    console.log(wordsStack.pop())
}
console.log(wordsStack)