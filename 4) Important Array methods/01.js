// IMPORTANT ARRAY METHODS

// forEach Method


const numbers=[4,2,5,8];

function myFunc(number,index){
    console.log(`The index of the number is ${index} and the number is ${number}`);
}

// for(let i=0;i<numbers.length;i++){
//     myFunc(numbers[i],i);
// }

numbers.forEach(myFunc);
// this forEach function takes function as an argument and runs for each input in an array


console.log();
console.log("A DIFFERENT WAY");
console.log();


// You can also create it like this
numbers.forEach(function(number,index){
    console.log(`The index of the number is ${index} and the number is ${number}`);
});


console.log();
console.log("TO MULTIPLY EACH NUMBER BY 2");
console.log();


numbers.forEach(function(number,index){
    console.log(`The index of the number is ${index} and the number is ${number} and after multiplying it with two we gets ${number*2}`)
});


console.log();
console.log("A REALISTIC USE OF forEach");
console.log();

const users=[
    {name:"Aayush", age: 20},
    {name:"Nisha", age: 17},
    {name:"Harsh", age: 21},
    {name:"Ashish", age: 22}
]

users.forEach(function(user){
    console.log(user.name, "is of age" , user.age);
});


console.log();
console.log("USING ARROW FUNCTION IN forEach");
console.log();


users.forEach((user)=>{
    console.log(user.name, "and" , user.age);
});
