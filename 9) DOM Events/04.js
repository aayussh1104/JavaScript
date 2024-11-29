// event object
// const firstButton = document.querySelector("#one");


// firstButton.addEventListener("click",function(event){   // this event will give the information of the event
//     console.log(this);
//     console.log(event);
// })

// Whenever we add an EventListener to any objext in javascript
// JS engine executes code line by line
// Browser have js engines + many extra feature in it like WebApi

// Jb browser ko pta chlega ki humne event perform kiya jo hum listen kr rhe hai
// browser will do 2 things then
// 1) Browser callback function ko Js engine ko dega
// 2) // Callback function ke saath jo event hua hai uski information bhi dega

// ye info hum object ke form mee milegi



// lets add avents to different buttons like we did in previous file

const allBtn= document.querySelectorAll(".my-buttons button");

for(let button of allBtn){
    button.addEventListener("click",function(event){
        console.log(event.currentTarget);
    })
}