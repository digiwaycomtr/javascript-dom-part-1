
let result;
 
// result = document.getElementsByClassName("item");
// result = document.getElementsByClassName("item")[0];
// result = document.getElementsByClassName("item")[1];
// result = document.getElementsByClassName("item")[2];

// const items = document.getElementsByClassName("item");

// const list1 = document.getElementById("list1");
// // const items = list1.getElementsByClassName("item");
// const items = list1.getElementsByTagName("li");

const items = document.querySelectorAll("#list1 .item");

console.log(items);
// for(let i=0; i < items.length; i++){
//     console.log(items[i]);
// }

for(let item of items){
   item.style.fontSize = "25px";
   item.style.color = "green";
}

//console.log(result);