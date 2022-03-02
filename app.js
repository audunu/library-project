let myLibrary = [];

const bookListElement = document.querySelector('.book-list');
const addBtn = document.querySelector('button[type=submit]');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('author');
const pagesInput = document.querySelector('pages');
const readInput = document.querySelector('read');
const popUp = document.querySelector('.pop-up');

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

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popUp.style.visibility = 'hidden';
    addBookToLibrary();
})




function addBookToLibrary() {
    
    
    const newBook = document.createElement('li');
    newBook.innerHTML = theHobbit.info();
    bookListElement.appendChild(newBook);
}




const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read');
const exampleBook = new Book('Title', 'Person', 290, 'read');

myLibrary.push(theHobbit);
myLibrary.push(exampleBook);


console.log(theHobbit.info());