let firstStart = "false";
root = document.documentElement;
const computedRoot = getComputedStyle(document.documentElement);

if (sessionStorage.getItem("firstStart") == "true") {
  let library = sessionStorage.getItem("library");
  library = JSON.parse(library);
  library.forEach(element => {
    const x = JSON.parse(element);
    console.log(x["author"]);
  });

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




let checkButton = document.getElementById("check");
checkButton.addEventListener("click", () => {
  console.log(firstStart);
  let x = sessionStorage.getItem("datakey");
  x = JSON.parse(x);
  console.log(typeof library);
  console.log("testing: " + x.author);
  
  library.push(x);
  console.log("Length: " + library.length);
  
  library.forEach(element => {
    console.log("AUTHOR: " + element.author);    
  });

})