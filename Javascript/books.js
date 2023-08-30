// Array that will holds book data
const myLibrary = [];
// getting book info container
let addBookCon1 = document.getElementById("addBook");

const mainCon1 = document.getElementById("library-container-blur");

// ID of form
const bTitle = document.getElementById("bkTitle");
const bAuthur = document.getElementById("bkAuthor");
const bPage = document.getElementById("bkPage");
const bStatus = document.getElementById("bkStatus");
const submitBtn = document.getElementById("submitBtn");

// Stored Book information
function Book(title, authur, page, readStatus) {
  this.title = title;
  this.authur = authur;
  this.page = page;
  this.readStatus = readStatus;
}
// function to add  book to the array list
function addBookToLibrary() {
  const newBook = Book(bTitle, bAuthur, bPage, bStatus);
  myLibrary.push(newBook);
}

function populateTable() {}

submitBtn.addEventListener("click", () => {
  console.log(bTitle.value, bAuthur.value, bPage.value, bStatus.value);
  addBookToLibrary();
  addBookCon1.classList.remove("active");
  mainCon1.classList.remove("conBlur");
});
