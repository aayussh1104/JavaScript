// Objects are refernce types
// Arrays are good but not sufficient for real world data
// Objects store key value pairs and dont have an index

// How to create objects
const person={name:"Aayush", age:20};
console.log(typeof person);
console.log(person);


const person1={
    name:"Suraj",
    age:21,
    hobbies:["getting laid", "cleaning dishes", "waiting for his hubby"]
}
console.log(person1);

// How to access data from the objects
console.log(person.name);
// console.log(person["name"]); We can also access like this
console.log(person.age);

console.log(person1.hobbies);

// How to add key value pair to an object
person.gender="male";
// person[gender]="male";  We can also add key value pair in objects like this
console.log(person);

// We can also write key in objects as string using double comma notation " "