// class keyword
// classes are fake in javascript, cuz all the internal work are same as in classes
// we will always call our class with the new keyword and constructor will be called itself when created

class CreateUser{
    constructor(firstname, lastname, email,age, address){
        console.log("constructor called");
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.age=age;
        this.address=address;
    }

    about(){
        return `${this.firstname} ${this.lastname} is ${this.age} years old and from ${this.address}`;
    }
    is18(){
        return this.age>=18;
    }
    sing(){
        return ` ${this.firstname} is singing :- WHAT ARE YOU WAITING FORRR, LOVE ME LIKE YOU DO LALA LOVE ME LIKE YOU DO, TOUCH ME LIKE YOU DO LALA TOUCH ME LIKE YOU DO`;
    }
    func(a){
        console.log(a);
    }
}

const user1=new CreateUser('Aayush', 'Gupta', 'aayushgupta110418@gmail.com',20,'Near Hanuman Garhi Mandir, Arya Nagar mohalla, Utraula, 271604');
const user2=new CreateUser('Shubhi', 'Gupta', 'shubhigupta298@gmail.com',20,'Near Hanuman Garhi Mandir, Arya Nagar mohalla, Utraula, 271604');
const user3=new CreateUser('Mehul', 'Gupta', 'mehulgupta18@gmail.com',28,'Near Hanuman Garhi Mandir, Arya Nagar mohalla, Utraula, 271604');
console.log(user1.sing());
console.log(user2.is18());
console.log(user3.about());
user1.func("aayush");

console.log(Object.getPrototypeOf(user2));   // this property is used to see prototype of 