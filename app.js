let myLibrary = [];

const cardContainer = document.querySelector('.grid-container');
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
        return `
                <p>${this.title}</p>
                <p>${this.author}</p>
                <p>${this.pages}</p>
                <p>${this.read}</p>
            `;
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
        const card = document.createElement('div');
        card.innerHTML = element.info();
        card.classList.add('card');
        cardContainer.appendChild(card);
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