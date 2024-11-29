// SHORT SYNTAX OF WRIRING FUNCTIONS IN OBJECTS

const user1={
    firstname : "aayush",
    age:20,
    about:()=>{
        console.log(this.firstname, this.age);
    }
}

const user2={
    firstname : "aayush",
    age:20,
    about(){           // you dont have to write function you and make key value pair, you can do it directly like this
        console.log(this.firstname, this.age);
    }
}

user2.about();