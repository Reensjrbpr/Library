//Create array to store book objects and function to add books to library

let library = [];
let index;

//Constructor
function Book(title, author, pages, read, index){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
}

//Generate book display
function render(library){

    const bookcase = document.querySelector('#library');

    for(let i = library.length; i < library.length + 1; i++){
        const book = document.createElement('div');
        const removeBook = document.createElement('div');

        book.classList.add('books');
        removeBook.classList.add('remove');

        removeBook.textContent = 'Remove';
        
        bookcase.appendChild(book);
        book.appendChild(removeBook);
    }
}

//render(library);


//Add book button
const add = document.querySelector('#newBook');

add.addEventListener('click', () => {
    const dim = document.querySelector('#overlay');

    dim.style.cssText = 'display: block;';
});

//Exit button on form
const exit = document.querySelector('#exit');

exit.addEventListener('click', () => {
    const hideForm = document.querySelector('#overlay');

    hideForm.style.cssText = 'display: none;';
});

//Submit button on form
const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
    const newTitle = document.querySelector('#title');
    const newAuthor = document.querySelector('#author');
    const newPages = document.querySelector('#pages');
    //const newRead = document.querySelector('#read'); **To be continued :D
    const clear = document.querySelector('#overlay');
 
    if(typeof index != 'number') index = 0;
    
    const newBook = new Book(newTitle.textContent, newAuthor.textContent, newPages.textContent, "no", index);
    
    library.push(newBook);

    index++;

    clear.style.cssText = 'display: none;';
    render(library);
});
