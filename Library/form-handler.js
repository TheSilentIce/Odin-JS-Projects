document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM LOADED")
    document.getElementById("book-form").addEventListener("submit", function(event) {
        let title = document.getElementById("Title").value;
        let author = document.getElementById("Author").value;
        let numberOfPages = document.getElementById("pages").value;
        let book = new Book(title,author,numberOfPages,false);
        book = JSON.stringify(book);

        try {
            let library = sessionStorage.getItem("library");
            library = JSON.parse(library);
            library.push(book);
            sessionStorage.setItem("library", JSON.stringify(library));
        } catch (error) {
            console.log("BRUH");
        }
        
        window.location.href = "index.html";
        event.preventDefault();
    });
  });



function Book(title, author, numberOfPages, readStatus) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.readStatus = readStatus;
  }