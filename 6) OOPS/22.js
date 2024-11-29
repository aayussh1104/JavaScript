// Same method in subclass or base class
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

console.log(animal1.eat());
console.log(animal2.isSupercute());


// dog class
class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed=speed;
    }

    run(){
        return`${this.name} runs at the speed of ${this.speed} km/hr`;
    }

    eat(){
        return `Modified string: ${this.name} eats food`;
    }
   
}

const tommy = new Dog("tommy", 13,7);
console.log(tommy);
console.log(tommy.run());
console.log(tommy.eat());