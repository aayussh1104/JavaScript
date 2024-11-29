const obj1={
    key1:"value1",
    key2:"value2"
}

// const obj3={}
// obj3.key3="value3";

const obj2= Object.create(obj1);
// there is one more way to create empty objects 
console.log(obj2);
obj2.key2="unique"; // first it will check in obj2 then it will go in any other object
obj2.key3="value3";

console.log(obj2.key3);
console.log(obj2.key2);  // if the key2 is not in obj3 it will find for it in obj1 this due to the new way of creating object
console.log(obj2.__proto__); // due to the new method obj1 is stored as __proto__ in obj2 and it is as object inside an object
// __proto__ sets the reference and takes you to the object written
// __proto__ is the reference of the object


// __proto__ and [[prototype]] is same 
// where as prototype is different