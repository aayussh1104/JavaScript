function hello(){
    console.log("Hello World");
}
hello();

// function in javascript ==> function + object 
// functions in javascript can be treated as function + object

console.log(hello.name);   // this name keyword tells the name of the function

// you can add your own properties in function
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);

// function will work as function but can work as well as objects

// function provides more useful properties like name property.

// functions proviedes us free space or empty objects

// when we create a function and then function gives us free space or empty object that is known as prototype

console.log(hello.prototype);  // function gives us prototype or empty object so we can add any key value pair related to the funtion in this object.

// only function provides prototype property
// to check if prototype is present in functions true or not

if(hello.prototype){
    console.log("prototype is present");
}else{
    console.log("prototype is not present");
}

const hello2={key1:"value1"};
if(hello2.prototype){
    console.log("prototype is present");
}else{
    console.log("prototype is not present");
}

const hello3=[1,4,2,3,56,6];
if(hello3.prototype){
    console.log("prototype is present");
}else{
    console.log("prototype is not present");
}


// to add properties in prototype or object
hello.prototype.abc="abc";
hello.prototype.xyz="xyz";
hello.prototype.sing=function(){
    console.log("I HAVE LOVED YOU SINCE WE WERE 18, LONG BEFORE WE HAD THE SAME DREAM TO BE LOVED AND TO BE IN LOVE");
}
console.log(hello.prototype);
console.log(hello.prototype.sing());

// __proto__ creates a chain of an object where as prototype gives a new empty object in function