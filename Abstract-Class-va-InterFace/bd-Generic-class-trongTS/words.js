"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var words = 'The quick brown fox jumps over the lazy dog'.split(' ');
var wordsStack = new Stack_1.Stack([], words.length);
words.forEach(function (word) { return wordsStack.push(word); });
console.log(wordsStack);
while (!wordsStack.isEmpty()) {
    console.log(wordsStack.pop());
}
console.log(wordsStack);
