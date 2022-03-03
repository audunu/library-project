let myLibrary = [];

const bookListElement = document.querySelector('.book-list');
const addBtn = document.querySelector('button[type=submit]');
const newBookBtn = document.querySelector('button');
const closeBtn = document.querySelector('.close');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');
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

newBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popUp.style.visibility = 'visible';
})

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popUp.style.visibility = 'hidden';
})



function addBookToLibrary() {
    const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
    myLibrary.push(newBook);
    
    myLibrary.forEach(element => {
        const listElement = document.createElement('li');
        listElement.innerHTML = element.info();
        bookListElement.appendChild(listElement);
    })

    // empty input fields

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.value = 'Yes';
   
}




const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read');
const exampleBook = new Book('Title', 'Person', 290, 'read');




console.log(theHobbit.info());