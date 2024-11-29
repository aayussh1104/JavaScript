const user={
    firstname:"Aayush",
    lastname:"gupta",
    email:"aayushgupta110418@gmail.com",
    age:20,
    address: "Near Hanuman Garhi Mandir, Arya Nagar mohalla, Utraula, 271604",
    about: function(){
        return `${this.firstname} ${this.lastname} is ${this.age} years old and from ${this.address}`
    },
    is18(){
        return this.age>=18
    }
}

const aboutuser=user.about();
console.log(aboutuser);

// if we want to create multiple users like this i.e. 1000 users, we cant just write the above same code for 1000 times
// so we will create a function which will take input as different users name, age, address

// 1) function(it will first create an object)
// 2) add key value pair
// 3) object ko return krega

function createUser(firstname, lastname, email,age, address){
    const user={};
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=function(){
        return `${this.firstname} ${this.lastname} is ${this.age} years old and from ${this.address}`
    };
    user.is18=function(){
        return this.age>=18
    };
    return user;
}

const user1=createUser('Aayush', 'Gupta', 'aayushgupta110418@gmail.com',20,'Near Hanuman Garhi Mandir, Arya Nagar mohalla, Utraula, 271604');
console.log(user1);
const is18=user1.is18();
console.log(is18);
const aboutuser1=user1.about();
console.log(aboutuser1);