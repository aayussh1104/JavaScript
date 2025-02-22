// synchronous programming vs asynchronous programming
// Synchronous programming => Program gets executed line by line
// JavaScript is a synchronus programming language and single threaded, well we can also perform asynchronous programming in it too

// example of synchronus programming
// console.log("Script starts");

// for(let i=0;i<10000;i++){
//     console.log("Inside for loop");
// }

// console.log("Script ends");


// setTimeout function ==> this function takes a function as an input with time, so it ask for after how much time we want to execute it
// setTimeout is present in the browser not javascript, javascript gives this function to browser and check the time and after time is completed return the statement inside it so javascript can proceed further
// example

// console.log("Script starts");
// function hello(){
//     console.log("inside setTimeout");
// }
// setTimeout(hello,1000);  // here the time is in milliseconds  // you can pass function inside setTimeout function too like arrow function or normal function
// console.log("Script ends");


// console.log();


// console.log("Another script starts");
// setTimeout(()=>{
//     console.log("Inside setTimeout function");
// },0); // 0 milliseconds

// for(let i=0 ; i<=5; i++){
//     console.log(i);
// }
// console.log("Script ends");

// setTimeout returns an id
// with the help of setTimeout function, we can perform asynchronous programming in javascript

// if we don't want our setTimeout function to execute and get terminated, we can terminate it like this using clearTimeout function and id 

console.log("Another script starts");
const id = setTimeout(()=>{
    console.log("Inside setTimeout function");
},0); // 0 milliseconds

for(let i=0 ; i<=5; i++){
    console.log(i);
}
console.log("setTimeout function id is", id);
console.log("Clearing timeout function");
clearTimeout(id);
console.log("Script ends");