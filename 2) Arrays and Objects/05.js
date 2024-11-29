// for loop in array

let fruits=["apple","banana","grapes","mangoes"];

// console.log(fruits.length);
// console.log(fruits[fruits.length-1])

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i].toUpperCase());
}

let fruits2=[];
for(let i=0;i<fruits.length;i++){
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);
