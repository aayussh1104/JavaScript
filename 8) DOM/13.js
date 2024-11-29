// Add new HTML elements to page



// innerHTML to add HTML element
const todoList= document.querySelector(".todo-list");
console.log(todoList.innerHTML);    // to see the innerHTML of this class
// todoList.innerHTML="<li> New todo </li>";      // this will change the innerHTML of the class

// to add new innerHTML with the existing one in the class
// todoList.innerHTML = todoList.innerHTML + "<li> New todo </li>";
todoList.innerHTML += "<li> New todo </li>";     // shortcut way to write this
todoList.innerHTML += "<li> Tech students </li>";


// we should never use this method cuz there will be performance issues if we do this


// we should use it when we have to change the whole html and not add or append anything