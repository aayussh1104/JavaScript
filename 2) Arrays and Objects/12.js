// Difference between dot and bracket notations

const key="email";
const person1={
    name:"Suraj",
    age:21,
    "person hobbies":["getting laid", "cleaning dishes", "waiting for his hubby"]
}
// To store more than two words as an key we use double comma notation 

// 1st use
console.log(person1["person hobbies"]);

// 2nd use
person1[key]="surajsingh@gmail.com";  // so the value in key becames the key of the object
console.log(person1);