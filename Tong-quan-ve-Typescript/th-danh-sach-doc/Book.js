"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, author, aLreadyRead) {
        this.title = title;
        this.author = author;
        this.aLreadyRead = aLreadyRead;
    }
    Book.prototype.getStatus = function () {
        return this.aLreadyRead;
    };
    Book.prototype.setStatus = function (value) {
        this.aLreadyRead = value;
    };
    return Book;
}());
exports.Book = Book;
