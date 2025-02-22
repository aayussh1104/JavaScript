// every METHOD
// every method will return true if all values in it value get satisfied to the function and the callback function will also return a boolean value that is true or false

const numbers = [2,4,6,8,10];

const ans = numbers.every((number)=>number%2===0);

// This function will check if all the elements in the array even or not, it will give false too if only one element is odd in the array

console.log(ans);

console.log();
console.log("A REALISITC EXAMPLE");
console.log();

const products=[
    {id:1, productName:"Laptop", price: 52000},
    {id:2, productName:"Phone", price: 20000},
    {id:3, productName:"Monitor", price: 35000},
    {id:4, productName:"Mouse", price: 1200},
    {id:5, productName:"CPU", price: 60000},
    {id:6, productName:"Keyboard", price: 4000}
]

// To check every product price is less than 20,000 or not

const ansobj=products.every((item)=> item.price<20000);
console.log(ansobj);