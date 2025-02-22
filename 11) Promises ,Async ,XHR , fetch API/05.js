// using Promises in place of callbacks which we used in 04.js file of 10th folder




const heading1=document.querySelector(".heading1");
const heading2=document.querySelector(".heading2");
const heading3=document.querySelector(".heading3");
const heading4=document.querySelector(".heading4");
const heading5=document.querySelector(".heading5");
const heading6=document.querySelector(".heading");
const heading7=document.querySelector(".heading7");



function changeText(element, text, color, time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent=text;
                element.style.color=color;
                resolve("now see it");
            }else{
                reject("its rejected");
            }
        },time)
    })
}

changeText(heading1, "one", "red", 1000)
.then(()=>{
    return changeText(heading2, "two", "orange", 1000);      // if we will not return anything here it will directly return undefined
})
.then(()=>{
    return changeText(heading3, "three", "purple", 1000);     // this function returns a promise here so why not lets return the promise here, because if we don't return anything it will return undefined
}).then(()=>{
    return changeText(heading4, "four", "blue", 1000)
}).then(()=>{
    return changeText(heading5, "five", "green", 1000)
}).then(()=>{
    return changeText(heading6, "six", "magenta", 1000)
}).then(()=>{
    return changeText(heading7, "seven", "aqua", 1000)
}).catch((error)=>{
    alert(error);    // this method will directly give an error
})