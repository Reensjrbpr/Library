//Create array to store book objects and function to add books to library

let library = [];
let index;

//Constructor
function addBook(title, author, pages, read, index){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
}

let j = 0;

//Generate book display
function render(library){

    const bookcase = document.querySelector('#library');

    for(let i = library.length; i < library.length + 1; i++){
        const book = document.createElement('div');
        const removeBook = document.createElement('div');
        const bookInfo = document.createElement('div');

        book.classList.add('books');
        book.setAttribute('id', `b${library[j].index}`);
        removeBook.classList.add('remove');
        removeBook.setAttribute('id', `${library[j].index}`);

        removeBook.textContent = 'Remove';

        bookInfo.innerHTML = `<p>Title: ${library[j].title}</p><br>
                              <p>Author: ${library[j].author}</p><br>
                              <p>Pages: ${library[j].pages}</p>`;
        
        j++;
        
        bookcase.appendChild(book);
        book.appendChild(removeBook);
        book.appendChild(bookInfo);
    }
    removeBooks();
}

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
    const getTitle = document.querySelector('#title');
    const getAuth = document.querySelector('#author');
    const getPages = document.querySelector('#pages');
    const clear = document.querySelector('#overlay');
    
    if(typeof index != 'number') index = 0;
    
    const newBook = new addBook(getTitle.value, getAuth.value, getPages.value, 'no', index);
    
    library.push(newBook);

    index++;

    clear.style.cssText = 'display: none;';

    //Clear fields
    getTitle.value = '';
    getAuth.value = '';
    getPages.value = '';

    render(library);
});

//Remove buttons
function removeBooks(){
    const removeBtn = document.querySelectorAll('.remove');

    removeBtn.forEach((removeBtn, rm) => removeBtn.addEventListener('click', () => {
        if(removeBtn.id == library[Number(rm)].index){
            const bookcase = document.querySelector('#library');
            const delBook = document.querySelector(`#b${removeBtn.id}`);

            bookcase.removeChild(delBook);
        }
    }));
}