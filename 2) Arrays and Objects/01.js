// Intros to Arrays = Reference types

// Arrays is a collection of ordered pair of items together, you can store many elements in an array. Arrays is mutable in javascript.
// Creation of arrays in javascript

let fruits = ["Apples","Grapes","Mangoes","Watermelons"];
console.log(fruits);
console.log(fruits[2]);

let numbers=[1,2,3,4,5];
console.log(numbers);

let mixed=[1,2,3.45,"Aayush", null, undefined];
console.log(mixed);

// Changing of elements inside an array
fruits=["Apples","Grapes","Mangoes","Watermelons"];
console.log(fruits);
fruits[1]="banana";
console.log(fruits);

console.log(typeof fruits);

// To check if the given array is actually an array or not we use a function in javascript
console.log(Array.isArray(fruits));
