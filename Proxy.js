// proxy 

// we can change or convert something in javascript in objects using proxy
// it only work with objects
// proxy manipulates and change objects


let user = {};

const option ={
    get(){
        return "Access denied";    // now if you eill access anything by the user it will give you access denied
    },

    set(target, prop, value){         // we always get a target and a prop whenever we get or set
        // console.log(target, prop);

        if(target == "salary"){
            return false; 
        }else{
            target[prop]=value;
            return true;
        }
    }
};


const myProxy = new Proxy(user, option);
myProxy.name = " Aayush ";
user.age=22;
console.log(user.age);


// console.log(user.name);
// user.name = "John";      // anything that will happen in user will happen in myProxy too
// console.log(user.name);       // after setting the grt function it will give you access denied
// console.log(myProxy.name);