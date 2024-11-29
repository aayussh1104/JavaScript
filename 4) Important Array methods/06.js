// find METHOD
// It will only return the first occurence of the function

const myArray =["Lion","Cat","Dog","Tiger"];

function islength3(string){
    return string.length === 3;
}

const ans = myArray.find(islength3);
// const ans = myArray.find((string) => string.length === 3);
console.log(ans);

console.log();
console.log("A REALISITC EXAMPLE");
console.log();

const users = [
    {id:1,name:"Aayush"},
    {id:2,name:"Nisha"},
    {id:3,name:"Harsh"},
    {id:4,name:"Deepak"},
    {id:5,name:"Rajdeep"},
    {id:6,name:"Rashi"}
]

const ansobj = users.find((user) => user.id === 2);
console.log(ansobj);

