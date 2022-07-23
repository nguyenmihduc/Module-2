"use strict";
function randomString(length, chars) {
    let result = '';
    for (let i = length; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}
let rString = randomString(4, '0123456789ABCDEFGHIJKLMNPQRSTUVWXYZ');
console.log(rString);
