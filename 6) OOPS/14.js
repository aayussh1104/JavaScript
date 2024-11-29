// const userMethods={
//     about:function(){
//         return `${this.firstname} ${this.lastname} is ${this.age} years old and from ${this.address}`
//     },
//     is18:function(){
//         return this.age>=18
//     },
//     sing: function(){
//         return ` ${this.firstname} is singing :- SO BABY PULL ME CLOSER, ON THE BACK SEAT OF YOUR ROVER, THAT I KNOW YOU CANT AFFORD, BITE THE TATTOO ON YOUR SHOULDER`;
//     }
// }

function createUser(firstname, lastname, email,age, address){
    const user=Object.create(createUser.prototype); // setting __proto__ of the object to the prototype of the function
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    return user;
}

console.log(createUser.prototype); // we will add userMethods functions and properties in createUser function prototype so we dont have to do __proto__ chaining
createUser.prototype.about= function(){
    return `${this.firstname} ${this.lastname} is ${this.age} years old and from ${this.address}`;
}
createUser.prototype.is18= function(){
    return this.age>=18;
}
createUser.prototype.sing= function(){
    return ` ${this.firstname} is singing :- WHAT ARE YOU WAITING FORRR, LOVE ME LIKE YOU DO LALA LOVE ME LIKE YOU DO, TOUCH ME LIKE YOU DO LALA TOUCH ME LIKE YOU DO`;
}


const user1=createUser('Aayush', 'Gupta', 'aayushgupta110418@gmail.com',20,'Near Hanuman Garhi Mandir, Arya Nagar mohalla, Utraula, 271604');
const user2=createUser('Shubhi', 'Gupta', 'shubhigupta298@gmail.com',20,'Near Hanuman Garhi Mandir, Arya Nagar mohalla, Utraula, 271604');
const user3=createUser('Mehul', 'Gupta', 'mehulgupta18@gmail.com',28,'Near Hanuman Garhi Mandir, Arya Nagar mohalla, Utraula, 271604');
// console.log(user1);
// console.log(user2.sing());
console.log(user1.sing());
console.log(user2.is18());
console.log(user3.about());