// map method
// It is very important method in js and its also very important in React.js
// It also takes callback function as an input as forEach
// map method alwas return a new array


const numbers=[3,4,6,8,9,2];

const square = function(number){
    return number*number;
}
// It is crucial to return when you use map method otherwise it will give undefined array

const newArray= numbers.map(square);
// map method alwas return a new array
console.log(newArray);

console.log();
console.log("DIFFERENT WAY AND DOING CUBE");
console.log();


const cube = numbers.map(function (number){
    return number*number*number;
});
console.log(cube);

console.log();
console.log("A REALISTIC US OF map METHOD");
console.log();

const users=[
    {name:"Aayush", age: 20},
    {name:"Nisha", age: 17},
    {name:"Harsh", age: 21},
    {name:"Ashish", age: 22}
]

const namesArray = users.map((user)=>{
    return user.name;
});
console.log(namesArray);
