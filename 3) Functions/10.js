// Callback functions

function myFunc2(name){
    console.log("Inside myFunc2");
    console.log(`your name is ${name}`)
}

function myFunc(callback){
    console.log("hello, i am a function");
    callback("Aayush");
}

myFunc(myFunc2);
