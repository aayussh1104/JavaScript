// callback
// we mostly use callback in asynchronus programming languages
// but lets understand it with the help of synchronus programming language first


function myFunc(callback){
    console.log("Function is doing task 1");
    callback();
}

// function myFunc2(){
//     console.log("Function is doing task 2");
// }

myFunc(function(){
    console.log("anonymous function");
});
// myFunc2();



// another example




function getTwoNumbersAndAdd(number1,number2, onSuccess, onLoose){
    if(typeof number1==="number" || typeof number2==="number"){
        onSuccess(number1,number2);
    }else{
        onLoose();
    }
}

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }


getTwoNumbersAndAdd("4","5",(num1,num2)=>{
    console.log(num1+num2);
}, ()=>{
    console.log("Wrong Data type");
    console.log("Please type numbers only");
});
