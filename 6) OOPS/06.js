
const user1={
    firstname : "aayush",
    age:20,
    about:function(){
        console.log(this.firstname, this.age);
    }
}

// Dont do this mistake

// user1.about();
const myfunc = user1.about; // here we are not calling the function we are just giving its reference to the variable
myfunc(); // it will give undefined

const myfunc2= user1.about();
myfunc2; // correct way