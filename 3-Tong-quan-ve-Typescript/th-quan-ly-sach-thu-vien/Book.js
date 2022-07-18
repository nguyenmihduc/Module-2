"use strict";
// export class Book {
//     private _ID: string;
//     private _name: string;
//
//     constructor(ID: string, name: string) {
//         this._ID = ID;
//         this._name = name;
//     }
//
//     getID(): string {
//         return this._ID;
//     }
//
//     setID(value: string): void {
//         this._ID = value;
//     }
//
//     getName(): string {
//         return this._name;
//     }
//
//     setName(value: string): void {
//         this._name = value;
//     }
// }
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(ID, name) {
        this._ID = ID;
        this._name = name;
    }
    Book.prototype.getID = function () {
        return this._ID;
    };
    Book.prototype.setID = function (value) {
        this._ID = value;
    };
    Book.prototype.getName = function () {
        return this._name;
    };
    Book.prototype.setName = function (value) {
        this._name = value;
    };
    return Book;
}());
exports.Book = Book;
