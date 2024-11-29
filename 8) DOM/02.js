// select element using query selector
// we can select anything by query selector


// const mainHeading = document.getElementById("main-heading");
const mainHeading = document.querySelector("#main-heading");
const header = document.querySelector(".header");
const navItem = document.querySelector(".nav-item");     // when the classes are same, we will only get the first element with the class name and the rest will be ignored
// const navItem2 = document.querySelectorAll(".nav-item");     // it will select all the elements with the same class name
console.log(navItem);    
// console.log(mainHeading);
// console.log(header);