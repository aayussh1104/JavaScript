export default class Person{
    constructor(firstname, lastname, age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }

    info(){
        console.log(this.firstname, this.lastname, this.age);
    }
}


export class Person2{
    constructor(firstname, lastname, age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }

    info(){
        console.log(this.firstname, this.lastname, this.age);
    }
}






// we can do export default only in one file and when we do that we dont have to write the brackets while we import