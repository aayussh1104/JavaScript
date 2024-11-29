const userMethods={
    about:function(){
        return `${this.firstname} ${this.lastname} is ${this.age} years old and from ${this.address}`
    },
    is18:function(){
        return this.age>=18
    }
}

function createUser(firstname, lastname, email,age, address){
    const user={};
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=userMethods.about;   // stores the refernce of the userMethods functions or methods and due to this multiple functions or methods will not get created every time and it will help in less storage
    user.is18=userMethods.is18;
    return user;
}


const user1=createUser('Aayush', 'Gupta', 'aayushgupta110418@gmail.com',20,'Near Hanuman Garhi Mandir, Arya Nagar mohalla, Utraula, 271604');
const user2=createUser('Shubhi', 'Gupta', 'shubhigupta298@gmail.com',20,'Near Hanuman Garhi Mandir, Arya Nagar mohalla, Utraula, 271604');
const user3=createUser('Mehul', 'Gupta', 'mehulgupta18@gmail.com',28,'Near Hanuman Garhi Mandir, Arya Nagar mohalla, Utraula, 271604');
console.log(user1.about());
console.log(user3.is18());
console.log(user1);