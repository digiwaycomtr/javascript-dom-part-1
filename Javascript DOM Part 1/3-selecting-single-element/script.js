
let result;

// 1 - document.getElementById();
// result = document.getElementById("title");
// result = document.getElementById("title").id;
// result = document.getElementById("title").className;
// result = document.getElementById("title").classList;

// document.getElementById("title").style.fontSize = "50px";
// document.getElementById("title").style.color = "blue";
// document.getElementById("title").style.display = "none";

// document.getElementById("title").innerText = "<p>Görev Listesi Uygulaması</p>";
// document.getElementById("title").innerHTML = "<p>Görev Listesi Uygulaması</p>";

// 2 - document.querySelector() => id, class, elementName  

//result = document.querySelector("#title");
//result = document.querySelector(".app-title")
//result = document.querySelector("h1");

//result = document.querySelector("input[type='submit']");

// result = document.querySelector("li:nth-child(2)");
// result = document.querySelector("li:nth-child(2)").style.color = "red";

const parentElement = document.querySelector("ul");
console.log(parentElement);

const firstElement = parentElement.querySelector("li");
firstElement.style.color = "yellow";
console.log(firstElement);

console.log(result);