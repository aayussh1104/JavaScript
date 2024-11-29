// Promise
// Promise is such value whose value we dont know now, but we will know it in near future
// Promise represents future value
console.log("Script starts");


const bucket = ['coffee','chips','sweets','toffee','vegetables','salt', 'rice'];

// we always create promises with new keyword

const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt")){         // includes function checks if it is present there or not
        resolve({value :"Fried Rice"});
    }else{
        reject(new Error("Something missing from the bucket"));
    }
})

// since now we have produced the promise

// as a JS developer we have to consume our promise more than to develop it

// and now we have to consume it


// this function will have two callback functions one for resolve and one for reject but we can remove the reject callback function cuz we should care about our resolve function only

friedRicePromise.then(
// it will run when our promise gets resolved
(myFriedRice)=>{
    console.log("Lets eat", myFriedRice);
},
).catch(
(error)=>{              // we can do chaining like this and use reject function here
    console.log(error);
})


setTimeout(()=>{
    console.log("hello from setTimeout");
}, 0)


for(let i=0;i<=10;i++){
    console.log(Math.random(),i);
}

console.log("Script ends");