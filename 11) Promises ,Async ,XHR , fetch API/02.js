// function returning promise

function ricePromise(){
    const bucket = ['coffee','chips','sweets','toffee','vegetables','salt', 'rice'];
    return new Promise((resolve,reject)=>{
        if(bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt")){         // includes function checks if it is present there or not
            resolve({value :"Fried Rice"});
        }else{
            reject(new Error("Something missing from the bucket"));
        }
    })
}


ricePromise().then(
    (myFriedRice)=>{
        console.log("Lets eat", myFriedRice);
    },
    ).catch(
    (error)=>{
        console.log(error);
    })