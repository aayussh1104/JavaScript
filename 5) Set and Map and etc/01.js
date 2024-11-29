// iterables
// These are the objects in which we can use or put for of loops
// Jis pr hum iterate kr paye
// example = string, array

const firstname="Aayush";
for(let char of firstname){
    console.log(char);
}

const names=["Aayush","Nisha","Shubhi","Harsh","Sidhu","Deepak","Ashish"];
for(let name of names){
    console.log(name);
}

// const users={'key1':'value1', 'key2':'value2'};
// for(let user of users){
//     console.log(user);
// }
// Objects are not iterable


// Array like objects
// Those who have length property and can be accessed with the help of index
// Example =  String

const firstname1="Harsh";
console.log(firstname1.length);
console.log(firstname1[3]);

