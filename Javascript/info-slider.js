// Getting button and container information
const plusBtn = document.getElementById("add-btn");

// getting book info container
const addBookCon = document.getElementById("addBook");

plusBtn.addEventListener("click", () => {
  addBookCon.classList.toggle("active");
});
