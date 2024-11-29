// this keyword

const btn= document.querySelector(".btn-headline");

btn.addEventListener("click", function(){
    console.log("You clicked me");
    console.log("value of this");
    console.log(this);   // the value of this will be button here
});


// so if we create a normal function inside or outside the eventListener method this will be button but if we create an arrow function this will be a window