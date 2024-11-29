// Cloning of Array

let array1=["item1","item2","item3"];
let array2=array1;
console.log(array1 === array2); // It will return true if its both same array

let array3=["Win", "Loose"];
// let array4=["Win","Loose"];
// let array4=array3.slice(0);  // slice methods help in going from 0 to the end element of the array and cloning the another array
// let array4=[].concat(array3);
// A new way to clone is using spread operator

let array4=[...array3];

console.log(array3);
console.log(array4);

array4.push("No Results");
console.log(array3);
console.log(array4);
console.log(array3 === array4);

let array5=array3.slice(0).concat("item1","item2");
console.log(array5);
let array6=[].concat(array3,"item1","item2");
console.log(array6);
let array7=[...array3,"item1","item2"];
console.log(array7);