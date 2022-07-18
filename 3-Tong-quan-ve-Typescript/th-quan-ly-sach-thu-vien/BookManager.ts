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

import {Book} from "./Book";

export class BookManager {
    private _books: Book[] = []
    constructor() {
    }
    addBook(book: Book): void {
        this._books.push(book);
    }
    getList(): Book[] {
        return this._books
    }
    delete(ID: string) {
        let indexDelete = this.findBook(ID)
        if (indexDelete != -1) {
            this._books.splice(indexDelete,1)
        } else {
            throw new Error('delete error')
        }
    }
    update(ID: string, name: string) {
        let indexUpdate = this.findBook(ID)
        if (indexUpdate != -1) {
            this._books[indexUpdate].setName(name)
        } else {
            throw new Error('update error')
        }
    }
    findBook(ID: string) {
        let i = -1
        this._books.forEach((book, index) => {
            if (book.getID() === ID) {
                i = index
            }
        })
        return i
    }
}