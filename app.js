let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}



const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read');
const exampleBook = new Book('Title', 'Person', 290, 'read');

console.log(theHobbit.info());