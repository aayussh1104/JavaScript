// Promise.resolve
// Promise chaining

const myPromise = Promise.resolve(5);
myPromise.then(value=>{
    console.log(value);
})


// then() method always returns promise

function myPromise1(){
    return new Promise((resolve)=>{
        resolve("Hookah");
    })
}

myPromise1().
then((value)=>{
    console.log(value);
    value+="Maar";
    return value;
    // this return promise here not value we can chain another then() method and return value
}).then((value)=>{
    console.log(value);
    value+="Na";
    return value;    // if we don't return value here it will give undefined
}).then((value)=>{
    console.log(value);
})