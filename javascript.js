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
  this.num = myLibrary.length;
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
      let button = document.createElement("button");

      let readContainer = document.createElement("div");
      let readName = document.createElement("div");
      let read = document.createElement("input");
      
      button.textContent = "Remove";
      button.classList.add("remove");
      button.classList.add(myLibrary[i].num);
      button.addEventListener("click", removeBook);
      
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
      card.appendChild(button);

      card.classList.add("card");
      container.appendChild(card);

  }
  body.appendChild(container);
  
}

function removeBook(e){
  let classList = e.target.classList.value;
  let classes = classList.split(" ");
  let num = classes[1];
  myLibrary.splice(num, num + 1);
  console.log(num);
  updateNum();
  displayBooks();
}

function updateNum(){
  for(let i = 0; i < myLibrary.length; i++){
    myLibrary[i].num = i;
  }
}


function removeAllChildNodes(parent){
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}