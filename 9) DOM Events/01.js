// intro to events
// suppose we click a button and some action performs, it is known as events

// Examples = button click, mouse hover etc

// click
// there are 3 ways to add events
// 1) Inside html code of the button     // we dont use this way now
// 2) 
// const btn= document.querySelector(".btn-headline");
// console.log(btn);
// console.dir(btn);

// btn.onclick= function(){
//     console.log("You clicked me");
// }

// we cant use this way too ux we cant assign onclick more than once

// 3)
const btn= document.querySelector(".btn-headline");

// we have a method and it is called addEventListener

function clickMe(){
    console.log("You clicked me");
}
// btn.addEventListener("click",clickMe);  // you can write the function inside this too

// the third one is the way how we add events in our code

btn.addEventListener("click",()=>{
    console.log("AROW FUNCTION");   
})