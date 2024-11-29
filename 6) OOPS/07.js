// Arrow functions
// there is no this in arrow function, arrow function takes this from its surroundings or lexical scope
const user1={
    firstname : "aayush",
    age:20,
    about:()=>{
        console.log(this.firstname, this.age);
    }
}

user1.about();

// if about was a normal function then this will be the user1 but about is arrow function so it will be one level up and it will be window object and give undefined
// we will know about it when we will create projects ahead