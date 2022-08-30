let addBook = (e) => {
  e.preventDefault();
  let formData = new FormData(e.target);
  console.log(formData);
  let formProps = Object.fromEntries(formData);
  console.log(formProps);
  addBookToLibrary(formProps.title, formProps.author, formProps.pages, formProps.read ? true : false);
  displayBooks();
  closeForm();
  addingBooks.reset();
}

let addingBooks = document.getElementById("add-book-form");
addingBooks.addEventListener("submit", addBook);

let myLibrary = [];

displayBooks();

function openForm() {
  document.querySelector(".form-popup").style.display = "block";
}

function closeForm() {
  document.querySelector(".form-popup").style.display = "none";
}


function Book(name, author, pages, isRead) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  
}


function addBookToLibrary(name, author, pages, isRead) {
  myLibrary.push(new Book(name, author, pages, isRead));
  console.log(myLibrary);
}

function displayBooks(){
  let body = document.body;
  let container = document.querySelector(".container");
  removeAllChildNodes(container);
  
  for(var i = 0; i < myLibrary.length; i++){
      let card = document.createElement("div");
      let name = document.createElement("div");
      let author = document.createElement("div");
      let pages = document.createElement("div");

      let readContainer = document.createElement("div");
      let readName = document.createElement("div");
      let read = document.createElement("input");
      
      read.type = "checkbox";
      read.checked = myLibrary[i].isRead;
      readName.textContent = "Is read?";
      readContainer.classList.add("read-container");

      name.textContent = myLibrary[i].name;
      author.textContent = myLibrary[i].author;
      pages.textContent = myLibrary[i].pages;

      readContainer.appendChild(read);
      readContainer.appendChild(readName);

      card.appendChild(name);
      card.appendChild(author);
      card.appendChild(pages);
      card.appendChild(readContainer);

      card.classList.add("card");
      container.appendChild(card);

  }
  body.appendChild(container);
  
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}