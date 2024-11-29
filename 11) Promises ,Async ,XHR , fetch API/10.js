// async await
// we can remove .then .then chaining in fetching API using async await

// fetch(URL)
//     .then(response => {
//         if(response.ok){
//             return(response.json());        // always remember this is a method
//     }})
//     .then(data=>{
//         console.log(data);
//     })                      // we are just consuming the promise using chaining




const URL ="https://jsonplaceholder.typicode.com/posts";

async function getPosts(){           // putting async infront of any normal function will always return you a promise, after using async it is not some normal function
    const response = await fetch(URL);           // we will put await in front of fetch inside async function, this will resolve the promise, await will wait until promise get resolved
    
    if(!response.ok){
        throw new error;
    }

    const data = await response.json();                     // putting await infront of our response.json() so it waits for the promise to get resolved
    return data;
}


getPosts(). 
    then(data =>{
        console.log(data);
    }).
    catch(error=>{
        console.log("Inside catch");       // this will not work until error handling or network error
        console.log(error);
    })




// all this async, await, fetch will work in background by the browser
// putting async infront of any normal function will always return promise so in calling function we have to do .then chaining method