export class Book {
    title: string;
    author: string;
    aLreadyRead: boolean;
    constructor(title: string, author: string, aLreadyRead: boolean) {
        this.title = title;
        this.author = author;
        this.aLreadyRead = aLreadyRead;
    }
    getStatus() {
        return this.aLreadyRead
    }
    setStatus(value) {
        this.aLreadyRead = value;
    }
}