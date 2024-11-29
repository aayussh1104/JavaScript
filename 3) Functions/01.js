// Create a function

function sayHey(){
    console.log("Hey Aayush, How are you?");
}

sayHey();

function add(){
    return 2+4;
}

const returnedValue=add();
console.log(returnedValue);

function sumofTwo(number1,number2){   // number1 and number2 are prameters
    return number1+number2;
}

returnedvalue2=sumofTwo(5,6);   // 5 and 6 are arguments passed to the parameters
console.log(returnedvalue2);

console.log("Even function");

function isEven(number){
    if(number%2 == 0){
        return true;
    }else{
    return false;
    }
}
console.log(isEven(9));

console.log(12%2 == 0);  

function isEven1(number){   // smaller way to perform the even function
    return(number%2==0);
}
console.log(isEven1(447));


console.log("String function");

function firstchar(anyString){
    return anyString[0];
}
console.log(firstchar("Learning Javascript now and keep hustling!"));

console.log("Search function");

function search(array, target){
    for(let i=0;i<array.length;i++){
        if(array[i]==target){
            return i;
        }
    }
    return -1;
}

console.log(search([1,2,4,3,5,7,12], 12));


// When we create a function it is known as a function declaration 
// when we give function to a variable it is known as a function expression

const expression = function (){
    console.log("sentence");
}

expression();
