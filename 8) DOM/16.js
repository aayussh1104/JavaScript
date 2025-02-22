// clone nodes

const ul= document.querySelector(".todo-list");
const li= document.createElement("li");
li.textContent="new todo";
const li2=li.cloneNode(true);     // it will make the clone of the same element and perform append and prepend both
ul.append(li);
ul.prepend(li2);