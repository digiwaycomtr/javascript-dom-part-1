


function createListItem(text){
    const li = document.createElement("li");

    li.className="item";
    li.id = "item4";
    li.innerText = text;
    //li.setAttribute=("href","digiway.com.tr")
    
    document.getElementById("list").appendChild(li);
}



// createListItem("Item 4");
// createListItem("Item 5");

function createListItem2(text) {
const li = document.createElement("li");
li.className="item";
li.innerHTML = `${text} <input type="checkbox">`;

document.getElementById("list").appendChild(li);
}

createListItem2("Item 4");
createListItem2("Item 5");
createListItem2("Item 6");
createListItem2("Item 7");