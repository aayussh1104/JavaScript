// error handling in getting response
// using callbacks

const URL ="https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest;

xhr.open("GET", URL);

xhr.onload = ()=>{
    if(xhr.status >=200 && xhr.status <300){      // cuz from 200 to 300 is correct
        const data = JSON.parse(xhr.response);
        // console.log(data);
        const id = data[3].id;    // to get an id of the object
        const xhr2 = new XMLHttpRequest;
        const url2 = `${URL}/${id}`;
        console.log(url2);

        xhr2.open("GET", url2);

        xhr2.onload = ()=>{
            const data2 = JSON.parse(xhr2.response);
            console.log(data2);
        }


        xhr2.send();
    }
    else{
        console.log("Something went wrong");
    }
}


xhr.onerror = ()=>{   // this will only work when you get a network error like suppose your net get disconnected
    console.log("Network error");
}


xhr.send();