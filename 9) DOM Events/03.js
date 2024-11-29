const allButtons = document.querySelectorAll("button");

// console.log(allButtons);  // this will give a nodeList of all the buttons

// firstButton.addEventListener("click",function(){
//     console.log("You clicked me");
// });

for(let button of allButtons){
    button.addEventListener("click", function(){
        console.log(this);   // this will print different buttons when clicked on them
        console.log(this.textContent);   // this will print textContent of the buttons      // but if we will create arrow functions here instead of normal ones it will print undefined
        // console.log("You clicked me");
    });
}


// We can use different types of loops =>

// for(let i = 0;i<allButtons.length;i++){    
//     allButtons[i].addEventListener("click",function(){
//         console.log("You clicked me");
//     })
// }


// allButtons.forEach(function(button){
//     button.addEventListener("click",function(){
//         console.log(this);
//     })
// });