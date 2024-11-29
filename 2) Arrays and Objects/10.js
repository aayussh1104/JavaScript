// array destructuring

const myArray=["value1","value2"];
// let var1=myArray[0];
// let var2=myArray[1];
// console.log("Value of first variable =", var1);
// console.log("Value of second variable =", var2);

let [var1,var2]=myArray;
var1="Value changed";
console.log("Value of first variable =", var1);
console.log("Value of second variable =", var2);

const myArray2=["value1","value2","value3"];

let [v1,,v2]=myArray2;
console.log("Value of first variable =", v1);
console.log("Value of 3rd is store in second variable =", v2);


const myArray3=["value1","value2","value3","value4"];

// let newArray=myArray3.slice(2);  This slice will create a new array of name newArray from the myArray3 from the second index till the last 
let [va1,va2, ...newArray]=myArray3;
console.log("First variable =",va1);
console.log("Second variable =",va2);
console.log(newArray);