import {Book} from "./Book";

let book1 = new Book('The Design of EveryDay Things','Don Norman', false);
let book2 = new Book('The Most Human Human','Brian Christian', true);
let book3 = new Book('Hanh trinh ve phuong dong','Nguyen Phong', false);
let book4 = new Book('Tri tue Do Thai','Jihm Ron', true);

let listBooks: Book[] = [];
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
function timSachDadoc() {
    let daDoc = listBooks.filter(value => {return value.aLreadyRead === true;})
    console.log(daDoc)
}
function timSachChuaDoc() {
    let chuaDoc = listBooks.filter(value => {return value.aLreadyRead === false})
    console.log(chuaDoc)
}

book1.setStatus(true)
book3.setStatus(true)

timSachChuaDoc()
// timSachDadoc()

// console.log(listBooks)

// tsc .\main.ts
// node .\main.js