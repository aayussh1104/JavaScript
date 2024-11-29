// Using new keyword

function CreateUser(firstname, lastname, email,age, address){
    this.firstname=firstname;
    this.lastname=lastname;
    this.email=email;
    this.age=age;
    this.address=address;
}

console.log(CreateUser.prototype); 
CreateUser.prototype.about= function(){
    return `${this.firstname} ${this.lastname} is ${this.age} years old and from ${this.address}`;
}
CreateUser.prototype.is18= function(){
    return this.age>=18;
}
CreateUser.prototype.sing= function(){
    return ` ${this.firstname} is singing :- WHAT ARE YOU WAITING FORRR, LOVE ME LIKE YOU DO LALA LOVE ME LIKE YOU DO, TOUCH ME LIKE YOU DO LALA TOUCH ME LIKE YOU DO`;
}


const user1=new CreateUser('Aayush', 'Gupta', 'aayushgupta110418@gmail.com',20,'Near Hanuman Garhi Mandir, Arya Nagar mohalla, Utraula, 271604');
const user2=new CreateUser('Shubhi', 'Gupta', 'shubhigupta298@gmail.com',20,'Near Hanuman Garhi Mandir, Arya Nagar mohalla, Utraula, 271604');
const user3=new CreateUser('Mehul', 'Gupta', 'mehulgupta18@gmail.com',28,'Near Hanuman Garhi Mandir, Arya Nagar mohalla, Utraula, 271604');
console.log(user1.sing());
console.log(user2.is18());
console.log(user3.about());

for(let key in user1){
   // console.log(key);
    if(user1.hasOwnProperty(key)){   // this property will only give user1 key and not prototype keys
        console.log(key);
    }

}