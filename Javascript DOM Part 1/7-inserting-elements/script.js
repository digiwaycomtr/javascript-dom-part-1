

//1- insertAdjacentElement
// function insertElement() {
//     const ul = document.querySelector("#list");

//     const h2 = document.createElement("h2");
//     h2.textContent = "insertAdjacentElement";

//     ul.insertAdjacentElement("afterend",h2);
// }

// insertElement();

// //2- insertAdjacentText

// function insertText() {
//     const item = document.querySelector("li:first-child");

//     item.insertAdjacentText("afterend","insertAdjacentText");
// }
// insertText();

// //3- insertAdjacentHTML
// function insertHtml () {
//     const item = document.querySelector("li:nth-child(2)");
//     item.insertAdjacentHTML("beforebegin","<h2>insertAdjacentHTML</h2>")
// }
// insertHtml();

//4- insertBefore

function insertBefore(){
    const ul = document.getElementById("list");

    const li = document.createElement("li");
    li.textContent = "insertBefore";

    const secondLi = document.querySelector("li:nth-child(2)");

    ul.insertBefore(li,secondLi);
    
}

insertBefore();


//      beforebegin
//      <ul>
//        afterbegin
//        <li></li>
//          beforeend
//      </ul>        
//      afterend 