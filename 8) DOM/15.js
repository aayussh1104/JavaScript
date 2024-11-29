// remove

const todo1=document.querySelector(".todo-list li");
todo1.remove();
console.log(todo1);

// before and after method
// if we have to add something before <ul> we can use before and when we have to add something after the </ul> we can use after.

const newTodoItem=document.createElement("li");
const newTodoItem2=document.createElement("li");
newTodoItem.textContent="Study";
newTodoItem2.textContent="Dont Study";
const todo=document.querySelector(".todo-list ");
todo.before(newTodoItem);
todo.after(newTodoItem2);
