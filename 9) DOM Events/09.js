const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");


// // capturing events
// child.addEventListener("click",function(){
//     console.log("capture child");
// }, true)
// parent.addEventListener("click",function(){
//     console.log("capture parent");
// }, true)
// grandparent.addEventListener("click",function(){
//     console.log("capture grandparent");
// }, true)
// document.body.addEventListener("click",function(){
//     console.log("capture body");
// }, true)



// // bubbling events
// //not capturing
// child.addEventListener("click",function(){
//     console.log("bubble child");
// })
// parent.addEventListener("click",function(){
//     console.log("bubble parent");
// })
// grandparent.addEventListener("click",function(){
//     console.log("bubble grandparent");
// })
// document.body.addEventListener("click",function(){
//     console.log("bubble body");
// })

// event delegation

grandparent.addEventListener("click", function(e){
    console.log("You clicked something")
    console.log(e.target);
})












