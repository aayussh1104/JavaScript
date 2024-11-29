const userMethods={
    about:function(){
        return `${this.firstname} ${this.lastname} is ${this.age} years old and from ${this.address}`
    },
    is18:function(){
        return this.age>=18
    },
    sing: function(){
        return ` ${this.firstname} is singing :- SO BABY PULL ME CLOSER, ON THE BACK SEAT OF YOUR ROVER, THAT I KNOW YOU CANT AFFORD, BITE THE TATTOO ON YOUR SHOULDER`;
    }
}

function createUser(firstname, lastname, email,age, address){
    const user=Object.create(userMethods);  // doing the proto chaining, creating an empty object with userMethods object as its __proto__
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    return user;
}


const user1=createUser('Aayush', 'Gupta', 'aayushgupta110418@gmail.com',20,'Near Hanuman Garhi Mandir, Arya Nagar mohalla, Utraula, 271604');
const user2=createUser('Shubhi', 'Gupta', 'shubhigupta298@gmail.com',20,'Near Hanuman Garhi Mandir, Arya Nagar mohalla, Utraula, 271604');
const user3=createUser('Mehul', 'Gupta', 'mehulgupta18@gmail.com',28,'Near Hanuman Garhi Mandir, Arya Nagar mohalla, Utraula, 271604');
console.log(user1);
console.log(user2.sing());