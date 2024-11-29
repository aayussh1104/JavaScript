// String methods or functions
// strings are immutable cant be change so all these functions will give new strings so we have to store it in new string or change the value of original string
// trim()
// toUpperCase()
// to LowerCase()
// slice()

// trim() removes spaces from the string
let firstName="    Aayush     ";
console.log(firstName.length);
let newString = firstName.trim();
console.log(newString);
console.log(newString.length);

// toUpperCase() converts all the  characters into upper case
console.log(newString.toUpperCase());

//toLowerCase() converts all the characters into lower case
console.log(newString.toLowerCase());

// slice() prints characters from one index to another
let anotherString = "Rajdeep"
let slicedString = anotherString.slice(0,5);
console.log(slicedString);

