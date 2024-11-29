// some METHOD
// It will return true if any of the condition satisfies the function, it will return false if all the elements didn't satisfies the function

const numbers = [3,5,8,9];

// To check if any element in this array is even or not, if only is even it wil retun true

const ans = numbers.some((number)=>number%2==0);
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

// To check if there is any element whose price is more than 50,000 or not

const ansobj = products.some((item)=> item.price>50000);
console.log(ansobj);

