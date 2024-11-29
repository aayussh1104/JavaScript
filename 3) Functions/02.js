// Arrow functions
// In arrow function we use function expression and we just remove function with an arrow (=>)
// Below are some function which are converted into arrow functions

// function sayHey(){
//     console.log("Hey Aayush, How are you?");
// }

const sayHey=() =>{
    console.log("Hey Aayush, How are you?");
}
sayHey();



// function add(){
//     return 2+4;
// }


const add=() =>{
    return 2+4;
}
console.log(add());



// function sumofTwo(number1,number2){   
//     return number1+number2;
// }

const sumofTwo=(number1,number2) =>{   
    return number1+number2;
}
console.log(sumofTwo(5,7));


console.log("Even function");

// function isEven(number){
//     if(number%2 == 0){
//         return true;
//     }else{
//     return false;
//     }
// }
 
const isEven=(number)=>{
    if(number%2 == 0){
        return true;
    }else{
    return false;
    }
}

console.log(isEven(5));



console.log("String function");

// function firstchar(anyString){
//     return anyString[0];
// }

const firstChar=(anyString)=>{
    return anyString[0];
}
console.log(firstChar("YO EVERYONE"))


console.log("Search function");

// function search(array, target){
//     for(let i=0;i<array.length;i++){
//         if(array[i]==target){
//             return i;
//         }
//     }
//     return -1;
// }

const search=(array, target) =>{
    for(let i=0;i<array.length;i++){
        if(array[i]==target){
            return i;
        }
    }
    return -1;
}

console.log(search([3,6,45,32,5,43], 32));


// Smaller arrow functions for small functions

const isEven1=number => number%2==0;
console.log(isEven1(32567));