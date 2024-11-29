const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);    // this property tells us how many classes does this section have


// to add new class in this section using javascript
// sectionTodo.classList.add('bg-dark');

// to remove class in this section using javascript
// sectionTodo.classList.remove("container");

// to check if class exists in this section or not
const ans = sectionTodo.classList.contains("container");
console.log(ans);

// toggle is a property which checks if class is present or not if it is present it will remove it and if it is not present it will add it 
sectionTodo.classList.toggle("bg-dark");   // first it will add the class in the section
sectionTodo.classList.toggle("bg-dark");   // and then it will remove the class from the section


// LETS DO THIS WITH THE HEADER CLASS

const header = document.querySelector(".header");
console.log(header.classList);

// lets add bg-dark class in header
header.classList.add("bg-dark");

console.log(header.classList);
