// loop part1
// get multiple elements using getElements by class name, this will return a collection of html



let navItems=document.getElementsByTagName("a");
console.log(navItems);
console.log(navItems.length);    // if any one says in javascript that it is an array like object it will have array indexing and length property


// we can use many loops here in HTMLCollection:-
// simple for loop
// for of loop
// forEach method  but we can't use forEach method to iterate over HTMLCollection

// for(let i=0;i<navItems.length;i++){
//     // console.log(navItems[i]);
//     const navItem=navItems[i];
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color= "green";
//     navItem.style.fontWeight="bold";
// }


// for(let navItem of navItems){
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color= "green";
//     navItem.style.fontWeight="bold";
// }

// we can use simple for loop and for of loop 

navItems=Array.from(navItems);   // this method converts HTMLCollection to array so that we can use forEach to perform the style
navItems.forEach((navItem) =>{
    navItem.style.backgroundColor="#fff";
    navItem.style.color= "green";
    navItem.style.fontWeight="bold";
} )