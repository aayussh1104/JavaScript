// keypress event
// mouseover event

const body = document.body;

// body.addEventListener("keypress",function(event){
//     console.log(event.key);
// })

// so this is keypress event you can try it on console and you will get to know about it more

const mainButton=document.querySelector(".btn-headline");

mainButton.addEventListener("mouseover",function(){
    console.log("mouseover event occured");
})


// there is one more event mouseleave lets apply and see it in console

mainButton.addEventListener("mouseleave",function(){
    console.log("mouseleave event occured");
})
    