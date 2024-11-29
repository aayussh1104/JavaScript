// getter and setters

class Person{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }
    get fullname(){
        return `${this.firstname} ${this.lastname}`;
    }
    setName(firstname, lastname){
        this.firstname= firstname;
        this.lastname=lastname;
    }
    set fullname(fullname){
        const [firstname,lastname]=fullname.split(" ");   // this will split the string when space is found
        this.firstname=firstname;
        this.lastname=lastname;
    }
}

const person1= new Person("Nisha","Rohilla",17);
console.log(person1);
console.log(person1.fullname);   // without using paranthesis or ()
person1.setName("Aayush","Gupta");
console.log(person1.fullname);

// One more way to change names
// person1.firstname="Aayush";
// person1.lastname="Gupta";

person1.fullname="Shubhi Gupta";
console.log(person1);