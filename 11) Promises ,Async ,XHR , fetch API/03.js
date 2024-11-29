// promise && setTimeout
function myPromise(){
    return new Promise((resolve,reject)=>{
        const value= true;
        setTimeout(()=>{
            if(value){
                resolve();
            }else{
                reject();
            }
        },2000)
    })
}


// I want to resolve/reject after 2 seconds


myPromise().then(()=>{console.log("Resolved")}).catch(()=>{console.log("Reject")});








