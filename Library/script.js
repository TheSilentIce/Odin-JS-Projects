let firstStart = "false";
const computedRoot = getComputedStyle(document.documentElement);

if (sessionStorage.getItem("firstStart") == "true") {
  let library = sessionStorage.getItem("library");
  library = JSON.parse(library);
  library.forEach(element => {
    const x = JSON.parse(element);
    console.log(x["numberOfPages"]);
  });

  createGrid(library);

  let addButton = document.getElementById("add");
  addButton.removeEventListener("click",null);
  addButton.addEventListener("click", () => {
    library = JSON.stringify(library);
    sessionStorage.setItem("library",library);
    window.location.href = "bookform.html";
})
} else {
  let library = new Array();
  firstStart = "true";
  sessionStorage.setItem("firstStart",firstStart);
  let addButton = document.getElementById("add");
  addButton.addEventListener("click", () => {
    sessionStorage.setItem("library", JSON.stringify(library));
    window.location.href = "bookform.html";
  })
}


function createGrid(library) {
  root = document.documentElement;
  let container = document.getElementById("bookContainer");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  container.classList.add("book-container");
  let row = 1;
  let column = 1;
  let deleteIndex = 0;

  library.forEach(element => {
    console.log("STARTING DELETEINDEX: " +deleteIndex);
    const item = JSON.parse(element);
    if (column == 6) {
      column = 1;
      row++;
    }
    // console.log("NEW ELEMENT: " + item);

    let book = document.createElement("div");
    book.style.setProperty("--column-position",column)
    book.style.setProperty("--row-position",row);
    book.classList.add("book");

    let title = document.createElement("div");
    title.textContent = item["title"];
    title.classList.add("title-card");
    
    let author = document.createElement("div");
    author.textContent = item["author"];
    author.classList.add("author-card");

    let pages = document.createElement("div");
    pages.textContent = item["numberOfPages"];
    pages.classList.add("pages-card");

    let pictures = document.createElement("div");
    pictures.classList.add("pictures-card")

    let x_button = document.createElement("button");
    x_button.classList.add("x-button");
    const something = document.createElement("div");
    something.value = deleteIndex;
    x_button.append(something);


    x_button.addEventListener("click",() => {
    console.log(Number(x_button.firstChild.value));
    console.log(typeof Number(x_button.firstChild.value));
    library.splice(Number(x_button.firstChild.value),1);

    console.log("LISTENER TIME");
    library.forEach(element => {
      console.log(element);
    })

      createGrid(library);
     });

    deleteIndex++;
    pictures.append(x_button);

    book.appendChild(title);
    book.appendChild(author);
    book.append(pages);
    book.append(pictures);
    column++;

    container.append(book);
    console.log("APPENDED: " + item["title"]);

  })  
}
