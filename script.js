class Book{
  constructor(name, author, pages, isRead){
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.num = myLibrary.length;
  }
  getName(){
    return this.name;
  }
  getAuthor(){
    return this.author;
  }
  getPages(){
    return this.pages;
  }
  getIsRead(){
    return this.isRead;
  }
}
class Library{
  constructor(){
    this.myLibrary = [];
  }

  addBookToLibrary(name, author, pages, isRead) {
    this.myLibrary.push(new Book(name, author, pages, isRead));
    this.displayBooks();
  }

  displayBooks(){
    let body = document.body;
    let container = document.querySelector(".container");
    this.removeAllChildNodes(container);
    
    for(var i = 0; i < this.myLibrary.length; i++){
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
        button.classList.add(this.myLibrary[i].num);
        button.addEventListener("click", removeBook);
        
        read.type = "checkbox";
        read.checked = this.myLibrary[i].getIsRead();
        readName.textContent = "Is read?";
        readContainer.classList.add("read-container");
  
        name.textContent = this.myLibrary[i].getName();
        author.textContent = this.myLibrary[i].getAuthor();
        pages.textContent = this.myLibrary[i].getPages();
  
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
  removeAllChildNodes(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }
  updateNum(){
    for(let i = 0; i < myLibrary.length; i++){
      myLibrary[i].num = i;
    }
  }
}

let addingBooks = document.getElementById("add-book-form");
addingBooks.addEventListener("submit", addBook);

let myLibrary = new Library();

myLibrary.displayBooks();

function openForm() {
  document.querySelector(".form-popup").style.display = "block";
}

function closeForm() {
  document.querySelector(".form-popup").style.display = "none";
}

function removeBook(e){
  let classList = e.target.classList.value;
  let classes = classList.split(" ");
  let num = classes[1];
  myLibrary.splice(num, num + 1);
  updateNum();
  displayBooks();
}

function addBook(e){
  e.preventDefault();
  let formData = new FormData(e.target);
  let formProps = Object.fromEntries(formData);
  myLibrary.addBookToLibrary(formProps.title, formProps.author, formProps.pages, formProps.read ? true : false);
  myLibrary.displayBooks();
  closeForm();
  addingBooks.reset();
}