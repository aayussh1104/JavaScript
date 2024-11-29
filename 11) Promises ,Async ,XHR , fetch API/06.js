// use and read mdn documents more for better understanding of all these programming

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();             // its very important to use new keyword to create an XMLHttpRequest
// console.log(xhr);

// STEP 1

xhr.open("GET",URL);    // we can write get in small too but its a good thing to write in capital and all this work is done asynchronously means it is done by the browser


// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState===4){
//         console.log(xhr);
//         const response = xhr.response;
//         const data = JSON.parse(response);   // this will convert the whole string file which is present inside JSON file as another data and will convert in javascript object
//         console.log(data);
//     }
// }   // this method will work only when our readyState get changed

xhr.onload = function(){     // where as this method will work only when our readyState gets 4
    console.log(xhr.readyState);
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}

xhr.send();












// full form of REST Api = Representational state transfer
// full form of JSON = JavaScript object notation


// we dont have to tell browser to do requests, browser by default does get request
// it is necessary to use double quotes in object for keys in json file unlike in js where there is not necessary to use double quotes
// we cant use methods in json file


