// reduce method

const numbers = [1,2,3,4,5];

// aim : Sum of all the numbers inside an array

const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
});
console.log(sum);

// WORKING OF ACCUMULATOR AND CURRENT VALUE IN THE FUNCTION
// accumulator,          currentValue,          return
// 1,                     2,                    3
// 3,                     3,                    6
// 6,                     4,                    10
// 10,                    5,                    15

console.log();
console.log("REAL LIFE EXAMPLE OF reduce METHOD");
console.log();

const userCart = [
    {productId: 1, name : "Mobile", price:12000},
    {productId: 2, name : "Laptop", price:52000},
    {productId: 3, name : "Television", price:15000}
]

// we  want the sum of the price we can do it using loops too but mostly developer do it using reduce to do it quickly, mostly done in react

const sumOfPrices=userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;
}, 0);
console.log(sumOfPrices);

// it is working same as the above on example

