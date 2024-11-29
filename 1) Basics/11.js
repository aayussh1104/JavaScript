// undefined
// null

let firstName;
console.log(typeof firstName);
firstName= "Aayush";
console.log(typeof firstName, firstName);

let secondName=null;
console.log(secondName);
console.log(typeof secondName);
secondName= "Nisha";
console.log(secondName);
console.log(typeof secondName);  //bug, Error

//BigInt
let myNumber=123;
console.log(myNumber, typeof myNumber);
console.log(Number.MAX_SAFE_INTEGER); // to check the highest safe integer, and if you want to store a bigger integer than this use BigInt

let number=BigInt(454156415111151548451581515515514646497978150548451);
console.log(number, typeof number);
let number2=BigInt(1125);
console.log(number2, typeof number2);
let sameNumber= 548n;
console.log(sameNumber, typeof sameNumber);


// Adding two BigInt variables
console.log(number2 + sameNumber);

// We cant perform operations ons BigInt and any other data types like we cant add bigint and int data types, we can only add bigint data types together
