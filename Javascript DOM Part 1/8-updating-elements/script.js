

function updateItem() {
    const firstItem = document.querySelector("li:first-child");

    const li = document.createElement("li");
    li.textContent = "Updated Item";

    firstItem.replaceWith(li);
}
//  updateItem();

function updateItem2() {
    const secondItem = document.querySelector("li:nth-child(2)");

    //secondItem.innerHTML = "Updated Item 2";
    secondItem.outerHTML = "<li>Updated Item 2</li>";
}

//updateItem2();


function updateAllItems () {
    const items = document.querySelectorAll("li");

    for(let i=0; i< items.length; i++)
    {
        // items[i].outerHTML = "<li>Updated All</li>";

        if(i==0){
            items[i].innerHTML = "First Item";
        }else{
            items[i].innerHTML = "Updated Item"
        }
    }


}

updateAllItems();