let firstStart = "false";
const computedRoot = getComputedStyle(document.documentElement);


if (sessionStorage.getItem("firstStart") == "true") {
  let library = sessionStorage.getItem("library");
  library = JSON.parse(library);
  library.forEach(element => {
    const x = JSON.parse(element);
    console.log(x["numberOfPages"]);
  });

  console.log("LENGTH: " + library.length)

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

  let libraryLength = library.length;
  libraryLength = Math.ceil(libraryLength / 5);
  let position = 1;

  if (libraryLength > 0) {
    for (let i = 0; i < library.length;i++) {
      console.log("LOOP EXECUTED")
      const element = JSON.parse(library[i]);

      //LOOP FIX, libraryLength is set at 1, change that!

      let book = document.createElement("div");
      book.style.setProperty("--column-position", position);
      position++;
      book.classList.add("book");

      let title = document.createElement("div");
      title.textContent = element["title"];
      title.classList.add("title-card");
      
      let author = document.createElement("div");
      author.textContent = element["author"];
      author.classList.add("author-card");

      let pages = document.createElement("div");
      pages.textContent = element["numberOfPages"];
      pages.classList.add("pages-card");

      book.appendChild(title);
      book.appendChild(author);
      book.append(pages);

      container.append(book);
      console.log("APPENDED: " + element["title"]);
    }
  }
}





  // library.forEach(element => {
  //   const y = JSON.parse(element);
  //   console.log(y["numberOfPages"])

  //   let book = document.createElement("div");
  //   book.classList.add("book");

  //   let title = document.createElement("div");
  //   title.textContent = y["title"];
  //   title.classList.add("title-card");
    
  //   let author = document.createElement("div");
  //   author.textContent = y["author"];
  //   author.classList.add("author-card");

  //   let pages = document.createElement("div");
  //   pages.textContent = y["numberOfPages"];
  //   pages.classList.add("pages-card");

  //   book.appendChild(title);
  //   book.appendChild(author);
  //   book.append(pages);

  //   container.append(book);
  // });