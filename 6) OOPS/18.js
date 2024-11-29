// we can change the prototypr of a function, it cannot always be object, you can change it

function hello(){
    console.log("hello");
}

console.log(hello.prototype);
hello.prototype=[];
console.log(hello.prototype);
hello.prototype.push(1);
console.log(hello.prototype);
