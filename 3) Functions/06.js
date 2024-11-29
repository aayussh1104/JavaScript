// Block scope vs Function scope

// let and const are Block scope
// means they can only be used inside their respective blocks and not from outside of the block
// var is a Function scope

{               // This is 1st block
    let firstName="Aayush";
    console.log(firstName);
}

{               // This is 2nd block
    const firstName="Nisha";
}
// console.log(firstName);  // This cannot be accessed

// but if we use var then this can be accessed


{
    var firstName="Harsh";
}
console.log(firstName);

// var can be used from anywhere


{
    var secondName="Raman";
    console.log(secondName);
}

{
    console.log(secondName);
}
