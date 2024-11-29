// static and its properties
// static method directly refers to class we dont have to create objects of the class like we do for the other methods
// using static infront of any variable, methods , we can only call that by class name not object name

class Person{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }

    static classInfo(){
        return "This is Person class";
    }
    get fullname(){
        return `${this.firstname} ${this.lastname}`;
    }

    set fullname(fullname){
        const [firstname,lastname]=fullname.split(" ");   
        this.firstname=firstname;
        this.lastname=lastname;
    }

    eat(){
        return`${this.firstname} ${this.lastname} is eating food`;
    }

    isSupercute(){
        return this.age<=1;
    }

    isCute(){
        return true;
    }
}

const person1= new Person("Yogendra Kumar", "Gupta", 52);
console.log(person1.eat());

// console.log(person1.classInfo());   // We cannot call it like that with object name
const ans = Person.classInfo();   // we can call it using class name like this
console.log(ans);