const myLibrary = [];

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

addBookToLibrary("The Hunger Games", "Suzanne Collins", 374, true);
addBookToLibrary("Sunrise on the Reaping", "Suzanne Collins", 387, false);

console.log(myLibrary);