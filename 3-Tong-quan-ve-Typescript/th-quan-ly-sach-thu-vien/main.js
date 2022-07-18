"use strict";
exports.__esModule = true;
var Book_1 = require("./Book");
var BookManager_1 = require("./BookManager");
var book1 = new Book_1.Book("B001", "Bi mat do thai");
var book2 = new Book_1.Book("B002", "nha gia kim");
var book3 = new Book_1.Book("B003", "tri tue do thai");
var bookManager = new BookManager_1.BookManager();
bookManager.addBook(book1);
bookManager.addBook(book2);
bookManager.addBook(book3);
console.table(bookManager.getList());
// bookManager.delete("B002")
//
// console.table(bookManager.getList())
bookManager.update('B003', 'hanh trinh ve phuong dong');
console.table(bookManager.getList());
