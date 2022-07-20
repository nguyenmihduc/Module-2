"use strict";
exports.__esModule = true;
var Book_1 = require("./Book");
var book1 = new Book_1.Book('The Design of EveryDay Things', 'Don Norman', false);
var book2 = new Book_1.Book('The Most Human Human', 'Brian Christian', true);
var book3 = new Book_1.Book('Hanh trinh ve phuong dong', 'Nguyen Phong', false);
var book4 = new Book_1.Book('Tri tue Do Thai', 'Jihm Ron', true);
var listBooks = [];
listBooks.push(book1, book2, book3, book4);
// for ( let i = 0; i < listBooks.length; i++) {
//     let book = listBooks[i];
//     let bookInfo = book.title + ' by ' + book.author
//     if (book.aLreadyRead) {
//         console.log(`ban da doc cuon sach: ${bookInfo}`)
//     } else {
//         console.log(`ban chua doc cuon sach: ${bookInfo}`)
//     }
// }
function sachDadoc() {
    var daDoc = listBooks.filter(function (value) { return value.aLreadyRead === true; });
    console.log(daDoc);
}
function sachChuaDoc() {
    var chuaDoc = listBooks.filter(function (value) { return value.aLreadyRead === false; });
    console.log(chuaDoc);
}
book1.setStatus(true);
book3.setStatus(true);
sachChuaDoc();
// sachDadoc()
// console.log(listBooks)
// tsc .\BubbleSort.ts
// node .\main.js
