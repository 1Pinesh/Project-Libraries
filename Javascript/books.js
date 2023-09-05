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
  const newBook = new Book(
    bTitle.value,
    bAuthur.value,
    bPage.value,
    bStatus.checked
  );
  myLibrary.push(newBook);
}

// Function populate Table
function populateTable() {
  const table = document.getElementById("Books-table");

  while (table.children.length > 1) {
    table.removeChild(table.children[1]);
  }

  for (let i = 0; i < myLibrary.length; i++) {
    const row = document.createElement("tr");

    // Title Column
    const titleCol = document.createElement("td");
    titleCol.textContent = myLibrary[i].title;
    row.appendChild(titleCol);

    // Author Column
    const authorCol = document.createElement("td");
    authorCol.textContent = myLibrary[i].authur;
    row.appendChild(authorCol);

    // Page Column
    const pageCol = document.createElement("td");
    pageCol.textContent = myLibrary[i].page;
    row.appendChild(pageCol);

    // Check status Column
    const readStatusCol = document.createElement("td");

    const checkedButton = document.createElement("input");
    checkedButton.type = "checkbox";
    checkedButton.classList = "readStatusCheckBox";

    checkedButton.checked = myLibrary[i].readStatus;

    readStatusCol.appendChild(checkedButton);

    row.appendChild(readStatusCol);

    //delete Column
    const deleteCol = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.id = "btnDelete";
    deleteBtn.textContent = "X";

    deleteCol.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      removeBook(i);
    });

    row.appendChild(deleteCol);

    // adding to table
    table.appendChild(row);
  }
}
// delete function
function removeBook(bookIndex) {
  if (bookIndex >= 0 && bookIndex < myLibrary.length) {
    myLibrary.splice(bookIndex, 1);
    populateTable();
  }
}

// Submit button
submitBtn.addEventListener("click", () => {
  console.log(bTitle.value, bAuthur.value, bPage.value, bStatus.value);
  addBookToLibrary();
  addBookCon1.classList.remove("active");
  mainCon1.classList.remove("conBlur");
  populateTable();
});
