// filter method
// it always return a boolean value


const numbers=[1,3,4,6,8,2,9];


const numberIsEven = function(number){
return number%2==0;
}

const evenNumbers=numbers.filter(numberIsEven);
console.log(evenNumbers);


console.log();
console.log("USING FUNCTION INSIDE THE METHOD");
console.log();

const oddNumbers = numbers.filter((number)=>{
    return number%2!=0;
});
console.log(oddNumbers);