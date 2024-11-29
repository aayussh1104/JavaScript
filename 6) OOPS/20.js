// Practice of classes
//INHERITANCE

class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    eat(){
        return`${this.name} eats food`;
    }

    isSupercute(){
        return this.age<=1;
    }

    isCute(){
        return true;
    }
}

const animal1=new Animal("Tiger",2);
const animal2=new Animal("Lion",1);
const animal3=new Animal("Panther",7);
const animal4=new Animal("Elephant",15);

console.log(animal1.eat());
console.log(animal2.isSupercute());
console.log(animal3.isCute());
console.log(animal4.isCute());


// dog class

class Dog extends Animal{
   
}

const tommy = new Dog("tommy", 13);
console.log(tommy.eat());