// document.createElement()
// append   =    It adds in the last
// prepend   =    It adds before 
// remove

// all developer use this method to add elements and append and prepend works inside an ul

const newTodoItem=document.createElement("li");
const newTodoItem2=document.createElement("li");
// const newTodoItemText=document.createTextNode("Study");
newTodoItem.textContent="Study";
newTodoItem2.textContent="Dont Study";
const todoList= document.querySelector(".todo-list");
// newTodoItem.append(newTodoItemText);
todoList.append(newTodoItem);
todoList.prepend(newTodoItem2);


// remove in next js file
