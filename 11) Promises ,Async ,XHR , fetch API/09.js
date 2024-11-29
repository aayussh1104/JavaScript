// fetch
// fetch automatically calls the get request        // fetch returns a promise


const URL ="https://jsonplaceholder.typicode.com/posts";

fetch(URL, {
    method: 'POST',                                           // POST method is used to create resources in out data, and thats why we use headers and all in it
    body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
    }),
    headers: {                                                 // Headers in the Fetch API are essential components that allow you to send additional information with your HTTP requests and responses.
    'Content-type': 'application/json; charset=UTF-8',         // else is not so necessary to write but application/json is so necessary
    },
}).
    then(response =>{
        if(response.ok){         // ok gets false when you use wrong url so we do this to check
        return response.json();
        }else{
            throw new Error("Something went wrong!!");        // this to throw error cuz fetch only gives error when it is related to network error
        }
    })
    .then (data=>{
        console.log(data);               // this print the fetched data from above
    }).catch(error =>{
        console.log("inside catch block");
        console.log(error);
    })


// fetch will only reject when you get error related to network error
// get is to fetch data from the server or read any data from the server


// get is used to fetch data from the server
// post is used to create data      // for more information read mdn documents


// open json typicode and go to guides to read about more functions like post etc