// callbacks, callback hell, pyramid of doom
// asynchronus programming


const heading1=document.querySelector(".heading1");
const heading2=document.querySelector(".heading2");
const heading3=document.querySelector(".heading3");
const heading4=document.querySelector(".heading4");
const heading5=document.querySelector(".heading5");
const heading6=document.querySelector(".heading6");
const heading7=document.querySelector(".heading7");


// setTimeout(()=>{
//     heading1.textContent="Heading1";
//     heading1.style.color="blue";
//     setTimeout(()=>{
//         heading2.textContent="Heading2";
//         heading2.style.color="violet";
//     }, 1000);
// }, 1000);



// this is known as callback hell, nested callbacks

// setTimeout(()=>{
//     heading1.textContent="Red";
//     heading1.style.color="red";
//     setTimeout(()=>{
//         heading2.textContent="Green";
//         heading2.style.color="green";
//         setTimeout(()=>{
//             heading3.textContent="Blue";
//             heading3.style.color="blue";
//             setTimeout(()=>{
//                 heading4.textContent="Orange";
//                 heading4.style.color="orange";
//                 setTimeout(()=>{
//                     heading5.textContent="Magenta";
//                     heading5.style.color="magenta";
//                     setTimeout(()=>{
//                         heading6.textContent="Purple";
//                         heading6.style.color="purple";
//                         setTimeout(()=>{
//                             heading7.textContent="Violet";
//                             heading7.style.color="violet";
//                         },1000)
//                     },2000)
//                 },2000)
//             },1000)
//         },1000)
//     },2000)
// },1000)




// doing this with the help of functions

function changeText(element, text, color, time, onSuccessCallback, onFailurCallback){
    setTimeout(()=>{
        if(element){
            element.textContent=text;
            element.style.color=color;
            if(onSuccessCallback){
                onSuccessCallback();
            }
        }else{
            if(onFailurCallback){
                onFailurCallback();
            }
        }
    },time)
}



// and this is pyramid of doom

changeText(heading1, "One", "Red", 1000, ()=>{
    changeText(heading2, "Two", "Green", 1000, ()=>{
        changeText(heading3, "Three", "Blue", 1000, ()=>{
            changeText(heading4, "Four", "Purple", 1000, ()=>{
                changeText(heading5, "Five", "Violet", 1000, ()=>{
                    changeText(heading6, "Six", "Yellow", 1000, ()=>{
                        changeText(heading7, "Seven", "Pink", 1000, ()=>{

                        }, ()=>{console.log("Heading7 does not exist")})
                    }, ()=>{console.log("Heading6 does not exist")});
                }, ()=>{console.log("Heading5 does not exist")});
            }, ()=>{console.log("Heading4 does not exist")});
        }, ()=>{console.log("Heading3 does not exist")});
    }, ()=>{console.log("Heading2 does not exist")});
}, ()=>{console.log("Heading1 does not exist")});
