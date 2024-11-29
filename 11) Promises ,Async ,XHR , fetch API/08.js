// now using promisify

const URL ="https://jsonplaceholder.typicode.com/posts";

function sendRequest(){
    return new Promise(function(resolve, reject){
    const xhr = new XMLHttpRequest;
    xhr.open("GET", URL);

    xhr.onload=()=>{
        if(xhr.status >= 200 && xhr.status< 300){
            resolve(xhr.response);
        }
        else{
            reject(new Error("Something went wrong"));
        }
    }

    xhr.onerror = function() {
        reject(new Error("Network error"));
    }


    xhr.send();
    })
}



sendRequest("GET", URL).
    then(response =>{
        const data = JSON.parse(response);
        return data;
    }).then(data=>{
        // console.log(data);
        const id = data[3].id;
        return id;
    }).then(id =>{
        const url2 = `${URL}/${id}`;
        return sendRequest("GET", url2);
    }).then(newResponse => {
        const newData = JSON.parse(newResponse);
        console.log(newData);
    }).catch(error => {
        console.log(error);
    })