// Array that will holds book data
const myLibrary = [];

// Stored Book information
function Book(title, authur, page, readStatus) {
  this.title = title;
  this.authur = authur;
  this.page = page;
  this.readStatus = readStatus;
}
// function to add  book to the array list
function addBookToLibrary() {
  const newBook = Book(title, authur, page, readStatus);
  myLibrary.push(newBook);
}
