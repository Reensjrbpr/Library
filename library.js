//Create array to store book objects and function to add books to library

let library = [1, 2, 3, 4, 5, 6, 7, 8];

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
        const removeBook = document.createElement('div');

        book.classList.add('books');
        removeBook.classList.add('remove');

        removeBook.textContent = 'Remove';
        
        bookcase.appendChild(book);
        book.appendChild(removeBook);
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