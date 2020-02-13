//Create array to store book objects and function to add books to library

let library = [1];

function Book(){
    //constructor
}

function addBook(){

}


//Generate book display
function render(library){

    const bookcase = document.querySelector('#library');

    for(let i = 0; i < library.length; i++){
        const book = document.createElement('div');
        book.classList.add('books');
        bookcase.appendChild(book);
    }
}

render(library);


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