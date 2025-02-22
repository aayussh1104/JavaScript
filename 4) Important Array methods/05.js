// sort METHOD
// sort method sorts an array in ascending order or descending
// It does not return a new array, it only mutates the current array
// JavaScript does not sorts the array without giving a compare function if we give it to sort directly, it will convert the numbers in string and sort them according to their ASCII values example given below
// const numbers = [200,1,4,300,1500];
// numbers.sort(numbers);
// console.log(numbers);

// ASCII TABLE
// char : ascii value

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64

// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90

// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96

// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122

// '{' : 123
// '/' : 124
// '}' : 125


const numbers = [29,8,4,200,19000];

// numbers.sort((a,b)=>{
//     return a-b;
// });
numbers.sort((a,b)=>a-b);
console.log(numbers);

// Lets take an example to show how this function works
// We want to sort 1200,410
// if a-b ---> positive(greater than 0)
// 1200-410 ---> 790
// So it will return b first then a means 410 then 1200

// if a-b ---> negative(smaller than 0)
// 5-9 ---> -4
// So it will return a first then b means 5 then 9

console.log();
console.log("TO SORT IN DESCENDING ORDER");
console.log();

numbers.sort((a,b) => {
    return b-a;
});
console.log(numbers);


console.log();
console.log("A REALISTIC EXAMPLE");
console.log();

// price HIGH TO LOW and price LOW TO HIGH in flipkart or amazon

const products=[
    {id:1, productName:"Laptop", price: 52000},
    {id:2, productName:"Phone", price: 20000},
    {id:3, productName:"Monitor", price: 35000},
    {id:4, productName:"Mouse", price: 1200},
    {id:5, productName:"CPU", price: 60000},
    {id:6, productName:"Keyboard", price: 4000}
]

// Low to High
const lowtohigh = products.slice(0).sort((a,b)=>{   // using slice to clone and not change the original object
    return a.price-b.price;
});
console.log(lowtohigh);

// High to Low
const hightolow = products.slice(0).sort((a,b)=>{
    return b.price-a.price;
});
console.log(hightolow);