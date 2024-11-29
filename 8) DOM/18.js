// how to get dimensions of the elements
// height and width

const sectionTodo=document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();
const infoHeight = sectionTodo.getBoundingClientRect().height;
const infoWidth = sectionTodo.getBoundingClientRect().width;
console.log(info);
console.log(infoHeight);
console.log(infoWidth);