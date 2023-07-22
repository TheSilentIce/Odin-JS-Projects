document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM LOADED")
    let library = sessionStorage.getItem("library");
    library = JSON.parse(library);
    console.log(library)
    document.getElementById("book-form").addEventListener("submit", function(event) {
        let title = document.getElementById("Title").value;
        let author = document.getElementById("Author").value;
        let pages = document.getElementById("pages").value;
        let book = new Book(title,author,pages,false);
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
        event.preventDefault(); // This prevents the form from submitting through the default method
    });
  });



function Book(title, author, numberOfPages, readStatus) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.readStatus = readStatus;
  }