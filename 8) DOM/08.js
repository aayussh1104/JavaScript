// loop part2
// get multiple elements using querySelectorAll, this will return a nodelist

let navItems = document.querySelectorAll("a");
console.log(navItems);


// we can use all three loops easily in nodeList:-
// simple for loop
// for of loop
// forEach method

// for(let i=0;i<navItems.length;i++){
//         // console.log(navItems[i]);
//         const navItem=navItems[i];
//         navItem.style.backgroundColor="#fff";
//         navItem.style.color= "green";
//         navItem.style.fontWeight="bold";
// }


// for(let navItem of navItems){
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color= "green";
//     navItem.style.fontWeight="bold";
// }


navItems.forEach((navItem) =>{
    navItem.style.backgroundColor="#fff";
    navItem.style.color= "green";
    navItem.style.fontWeight="bold";
} )