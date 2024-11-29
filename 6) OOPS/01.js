// methods
// Methods are functions inside an object

function info(){
    console.log(`person name is ${this.firstname} and person age is ${this.age}`);
}

const person1={
    firstname : "aayush",
    age : 20,
    about : info
}

const person2={
    firstname : "harsh",
    age : 21,
    about : info   // only setting the value not giving the function, we will call the function with the key name with brackets later.
}

const person3={
    firstname : "ashish",
    age : 22,
    about : function(){
        console.log(`Third person name is ${this.firstname} and his age is ${this.age}`);
    }
}

person1.about();
person2.about();
person3.about();


// this keyword basically tells us about the object that from which object it was called from