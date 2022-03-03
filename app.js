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
                <div>${this.title}</div>
                <div>${this.author}</div>
                <div>${this.pages}</div>
                <div>${this.read}</div>
                <button class='delete'>Delete</button>
            `;
    }
    changeReadStatus() {
        if (this.read = 'Read') {
            this.read = 'Not Read';
        }
        else {
            this.read = 'Read';
        }
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

    displayLibrary();

    // empty input fields
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.value = 'Yes';
}


function displayLibrary() {
    cardContainer.innerHTML = '';

    myLibrary.forEach((element, index) => {
        if (element.title === '') {
            
        }
        else {
            const card = document.createElement('div');
            card.innerHTML = element.info();
            const deleteBtn = card.querySelector('button');
            deleteBtn.setAttribute('data-index', index);
            card.classList.add('card');
            cardContainer.appendChild(card);
        }
    })

    // const readBtns = document.querySelectorAll('.card > div:nth-child(4)');


    const deleteBtns = document.querySelectorAll('.delete');
    deleteBtns.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            const index = element.getAttribute('data-index');
            myLibrary.splice(index, 1);
            displayLibrary();
        })
    })

}


