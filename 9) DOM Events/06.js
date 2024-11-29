// little practice with click events

const allButtons=document.querySelectorAll(".my-buttons button");

for(let button of allButtons){
    button.addEventListener("click", function(event){
        // console.log("event.target");
        event.target.style.backgroundColor = "yellow";
        event.target.style.color="black";
    });
}