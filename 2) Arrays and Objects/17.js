// Objects inside an array
// used in real world applications

const array=[
    {userid:1,name:"Aayushh"},
    {userid:2,name:"Suraj"},
    {userid:3,name:"Adesh"}
]

console.log(array);

for(let user of array){
    console.log(user);
    console.log(user.userid);
    console.log(user.name);
}