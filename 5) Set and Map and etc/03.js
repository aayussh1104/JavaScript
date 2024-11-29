// Maps
// It is different than the map method of the array, you studied earlier. It stores key value pairs same as an objects

// Map is an iterable
// Duplicate keys are not allowed as in objects

// DIFFERENCE BETWEEN MAPS AND OBJECTS=
// Objects can only have string or symbol as key where as
// Maps can have anything as their key like array, number, string


// Syntax of storing values in a Map
const person = new Map();
person.set("firstName", "Aayush");
person.set("age",20);
person.set(1,"one");
person.set([1,2,3,4], ["aayush","harsh","ashish","deepak"]);      // making an array a key in map
person.set({"one":1}, "onetwothree");     // making an object a key in map
console.log(person);
// To access the values of a map
console.log(person.get("firstName"));
console.log(person.get(1));
console.log(person.get("age"));
console.log(person.keys());

// Iterating on the map elements using loop
for(let key of person.keys()){
    console.log(key, typeof key);
}

for(let key of person){
    console.log(key);
    console.log(Array.isArray(key));  // because this give value in array and this method is to check
}

for(let [key,value] of person){
    console.log(key, value);
}

