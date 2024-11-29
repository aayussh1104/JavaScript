// Primitive vs Reference data types

// Primitive Types
let num1 = 6;
let num2 = num1;
console.log("Value of num1 is", num1);
console.log("Value of num2 is", num2);

num1++;
console.log("After incrementing the value of num1");
console.log("Value of num1 is", num1);
console.log("Value of num2 is", num2);

// Reference Types
// Array
let array1 = ["item1","item2"];
let array2=array1;
console.log("The value of array1 is", array1);
console.log("The value of array2 is", array2);
console.log("After pushing the elements inside the array");
array1.push("item3");
console.log("The value of array1 is", array1);
console.log("The value of array2 is", array2);

// Primitive data types are stored in stack in Javascript.
// Reference types are stored in heap in Javascript.


