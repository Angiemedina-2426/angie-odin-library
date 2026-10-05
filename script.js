const myLibrary = [];

const container = document.getElementById("container");
displayLibrary(myLibrary);

function Book(title, author, pages, read){
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read){
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}



function displayLibrary(array){
  container.replaceChildren();
  for(let i = 0; i < array.length; i++){
  const card = document.createElement("div");
  card.dataset.id = array[i].id;

  const title = document.createElement("p");
  title.textContent = `Title: ${array[i].title}`;
  card.appendChild(title);

  const author = document.createElement("p");
  author.textContent = `Author: ${array[i].author}`;
  card.appendChild(author);

  const pages = document.createElement("p");
  pages.textContent = `Pages: ${array[i].pages}`;
  card.appendChild(pages);

  const read = document.createElement("p");
  const haveRead = (array[i].read) ? "Yes" : "No";
  read.textContent = `Read: ${haveRead}`
  card.appendChild(read);

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  card.appendChild(removeButton);

  removeButton.addEventListener("click", function(event){
  const currentBookId = array[i].id;

  const index = myLibrary.findIndex(function(book){
    return book.id === currentBookId;
  });

  myLibrary.splice(index,1);
  displayLibrary(myLibrary);
});

  container.appendChild(card);
}
}


const form = document.getElementById("book-form");


form.addEventListener("submit", function(event){
event.preventDefault();
const title = document.getElementById("title").value;
const author = document.getElementById("author").value;
const pages = Number(document.getElementById("pages").value);
const read = document.getElementById("read").checked;

addBookToLibrary(title, author, pages, read);
displayLibrary(myLibrary);
form.reset();
});
