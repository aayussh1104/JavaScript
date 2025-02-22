// Nested if else
const prompt = require('prompt-sync')(); // this is to run prompt function in vs code 

let winningnumber=11;
let userGuess= +prompt("Guess a number");
console.log(userGuess);

if(userGuess==winningnumber){
    console.log("Your Guess is right!")
}else{
    if(userGuess< winningnumber){
        console.log("Number is too low");
    }else{
        console.log("Nukmber is too high");
    }
}
