"use strict";
// import {Book} from "./Book";
//
// export class BookManager {
//     private _books: Book[] = []
//     constructor() {
//     }
//     addBook(book: Book): void {
//         this._books.push(book);
//     }
//     getList(): Book[] {
//         return this._books
//     }
//
//     findBook(ID: string) {
//         let i = -1;
//         this._books.forEach((book, index) => {
//             if (book.getID() === ID) {
//                 i = index
//             }
//         })
//         return i
//     }
//
//     delete(ID: string) {
//         let indexBookDelete = this.findBook(ID)
//         if (indexBookDelete != -1) {
//             this._books.splice(indexBookDelete,1)
//         } else {
//             throw new Error('delete error')
//         }
//     }
//     update(ID: string, name: string) {
//         let indexBookUpdate = this.findBook(ID)
//         if (indexBookUpdate != -1) {
//             this._books[indexBookUpdate].setName(name)
//         } else {
//             throw new Error('update error')
//         }
//     }
//
// }
exports.__esModule = true;
exports.BookManager = void 0;
var BookManager = /** @class */ (function () {
    function BookManager() {
        this._books = [];
    }
    BookManager.prototype.addBook = function (book) {
        this._books.push(book);
    };
    BookManager.prototype.getList = function () {
        return this._books;
    };
    BookManager.prototype["delete"] = function (ID) {
        var indexDelete = this.findBook(ID);
        if (indexDelete != -1) {
            this._books.splice(indexDelete, 1);
        }
        else {
            throw new Error('delete error');
        }
    };
    BookManager.prototype.update = function (ID, name) {
        var indexUpdate = this.findBook(ID);
        if (indexUpdate != -1) {
            this._books[indexUpdate].setName(name);
        }
        else {
            throw new Error('update error');
        }
    };
    BookManager.prototype.findBook = function (ID) {
        var i = -1;
        this._books.forEach(function (book, index) {
            if (book.getID() === ID) {
                i = index;
            }
        });
        return i;
    };
    return BookManager;
}());
exports.BookManager = BookManager;
