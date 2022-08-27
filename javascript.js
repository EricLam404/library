let addingBooks = document.querySelector(".add");
addingBooks.addEventListener('click', addBookToLibrary);

let myLibrary = [];

function Book(name, author) {
  this.name = name;
  this.author = author;
  
}


function addBookToLibrary(name, author) {
  myLibrary.push(new Book(name, author));
}


function displayBooks(){
  let body = document.body;
  console.log(body);
  let container = document.querySelector(".container");
  
  for(var i = 0; i < myLibrary.length; i++){
      let card = document.createElement("div");
      let name = document.createElement("div");
      let author = document.createElement("div");

      name.textContent = myLibrary[i].name;
      author.textContent = myLibrary[i].author;

      card.appendChild(name);
      card.appendChild(author);

      card.classList.add("card");
      console.log(card);
      container.appendChild(card);

  }
  body.appendChild(container);
  
}

displayBooks();

function openForm() {
  console.log(document.querySelector(".form-container"))
  document.querySelector(".form-popup").style.display = "block";
}

function closeForm() {
  document.querySelector(".form-popup").style.display = "none";
}