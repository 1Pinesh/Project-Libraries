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

function populateTable() {
  const table = document.getElementById("Books-table");

  while (table.children.length > 1) {
    table.removeChild(table.children[1]);
  }

  for (let i = 0; i < myLibrary.length; i++) {
    const row = document.createElement("tr");

    const titleCol = document.createElement("td");
    titleCol.textContent = myLibrary[i].title;
    row.appendChild(titleCol);

    const authorCol = document.createElement("td");
    authorCol.textContent = myLibrary[i].authur;
    row.appendChild(authorCol);

    const pageCol = document.createElement("td");
    pageCol.textContent = myLibrary[i].page;
    row.appendChild(pageCol);

    const readStatusCol = document.createElement("td");

    const checkedButton = document.createElement("input");
    checkedButton.type = "checkbox";
    checkedButton.id = "readStatusCheckBox";

    checkedButton.checked = myLibrary[i].readStatus;

    readStatusCol.appendChild(checkedButton);

    row.appendChild(readStatusCol);

    table.appendChild(row);
  }
}

submitBtn.addEventListener("click", () => {
  console.log(bTitle.value, bAuthur.value, bPage.value, bStatus.value);
  addBookToLibrary();
  addBookCon1.classList.remove("active");
  mainCon1.classList.remove("conBlur");
  populateTable();
});
