// get multiple elements using getElements by class name, this will return a collection of html
// get multiple elements using querySelectorAll, this will return a nodelist

const navItems=document.getElementsByClassName("nav-item");
console.log(navItems);   // it will give an array like object means you can access them using indexes but not all array functions can apply in this
console.log(navItems[1]);   
console.log(Array.isArray(navItems));  // it is just like an array but not array


const navItems1 = document.querySelectorAll(".nav-item");  //we have to put . for class name and # for id 
console.log(navItems1);  // it also return an array like object so we can do indexing on this
console.log(navItems1[2]);