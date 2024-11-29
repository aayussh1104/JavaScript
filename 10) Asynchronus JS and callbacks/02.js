// setInterval function  => this will keep executing after the time given in it

// console.log("Script starts");
// setInterval(()=>{
//     console.log(Math.random());
// }, 1000);
// console.log("Script ends");


const body=document.querySelector("body");
const button=document.querySelector("button");



const intervalID = setInterval(()=>{
    const red= Math.floor(Math.random() * 256);
    const green= Math.floor(Math.random() * 256);
    const blue= Math.floor(Math.random() * 256);

    const rgb=`rgb(${red},${green},${blue})`;
    console.log(rgb);
    body.style.background=rgb;
},1000);

button.addEventListener("click", ()=>{
    clearInterval(intervalID);
    button.textContent= body.style.background;
})

// you can also stop it using clearInterval function and id, like we did before in previous files