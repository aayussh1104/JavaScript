console.log("Script starts");

const allButtons = document.querySelectorAll(".my-buttons button");

for(let button of allButtons){
    button.addEventListener("click",(event)=>{
        let num=0;
        for(let i=0;i<1000000000;i++){
            num++;
        }
        console.log(event.currentTarget.textContent, num);
    });
}

let outerVar=0;
for(let i= 0; i<1000000000;i++){
    outerVar++;
}
console.log("outer variable is", outerVar);
console.log("Script ends");


// behind the scenes work on youtube video