let firstStart = "false";
root = document.documentElement;
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
  let container = document.getElementById("bookContainer");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
}
  container.classList.add("book-container");
  library.forEach(element => {
    const y = JSON.parse(element);
    console.log(y["numberOfPages"])

    let book = document.createElement("div");
    book.classList.add("book");

    let title = document.createElement("div");
    title.textContent = y["title"];
    
    let author = document.createElement("div");
    author.textContent = y["author"];

    let pages = document.createElement("div");
    pages.textContent = y["numberOfPages"];

    book.appendChild(title);
    book.appendChild(author);
    book.append(pages);

    container.append(book);
  });
}
