import render from "./render.js";
import store, { addTodo, deleteTodo, toggleCompleted } from "./store.js";

window.addEventListener("todosChanged",()=>{
    // console.log("todosChanged fired");
    render();
})



// try to get store from localStorage

const storeFromLocalStorage = JSON.parse(localStorage.getItem("store"));
if(storeFromLocalStorage?.todos.length>0){
    store.todos= storeFromLocalStorage.todos;
}else{
    localStorage.setItem("store", JSON.stringify(store));
    render();
}




// todos is an array and arrays are reference types
// todos value will only change when you assign it some new value with square bracket as an array
// no matter we use any frameworks first we have to copy the array and then change it like we are doing in our files

render();


// form get

const form = document.querySelector("#form");
const todoTitleInput=document.querySelector(".todo-title-input");

form.addEventListener("submit",(event)=>{
    event.preventDefault();            // this will stop from getting page refreshed whenever we click on the button
    const todoTitle=todoTitleInput.value;
    const newTodo = {id : crypto.randomUUID(), title : todoTitle, completed : false};
    addTodo(newTodo);
});


const todos = document.querySelector(".todos");

todos.addEventListener("click", (event)=>{
    const target = event.target;
if(target.classList.contains("delete-todo-button")){
    const id = target.closest(".todo").dataset.id;
    deleteTodo(id);   
}
})


todos.addEventListener("change",event=>{
    const target = event.target;
if(target.classList.contains("todo-checkbox")){
    const id = target.closest(".todo").dataset.id;
    const completed = target.checked;
    toggleCompleted(id, completed);
    render();
}
})

