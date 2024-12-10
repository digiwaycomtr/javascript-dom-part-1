
let result;
 
const parent = document.querySelector(".parent");

result = parent.children;
result = parent.children[0];
result = parent.children[0].innerText;
result = parent.nodeName;

result = parent.firstElementChild;
result = parent.lastElementChild;

const child = document.querySelector(".child");

result = child;
result = child.parentElement;
result = child.parentElement.parentElement;

result = child.nextElementSibling;
result = child.nextElementSibling.nextElementSibling;
result = child.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(result);