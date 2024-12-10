function clearTitle () {
    const h1 = document.querySelector("#title");
    h1.remove();
}

// clearTitle();

function deleteItem1() {
    // const firstItem = document.querySelector("li:first-child");
    // firstItem.remove();

    const ul = document.querySelector("#list");
    const firstItem = document.querySelector("li:first-child");

    ul.removeChild(firstItem);
}

//deleteItem1();


function deleteItem2(deleteelement) {
   

    const ul = document.querySelector("#list");
    const item = document.querySelector(`li:nth-child(${deleteelement})`);

    ul.removeChild(item);
}

// deleteItem2(2);

function deleteAll() {
    const ul = document.querySelector("#list");
    // ul.innerHTML = "";
    ul.outerHTML = "";
}

deleteAll();