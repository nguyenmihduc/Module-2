import {Book} from "./Book";
import {BookManager} from "./BookManager";

let book1 = new Book("B001", "Bi mat do thai")
let book2 = new Book("B002", "nha gia kim")
let book3 = new Book("B003", "tri tue do thai")

let bookManager = new BookManager();
bookManager.addBook(book1);
bookManager.addBook(book2);
bookManager.addBook(book3);

console.table(bookManager.getList())

// bookManager.delete("B002")
//
// console.table(bookManager.getList())

bookManager.update('B003', 'hanh trinh ve phuong dong')

console.table(bookManager.getList())
