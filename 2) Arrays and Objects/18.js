// Nested destructuring

const array=[
    {userid:1,name:"Aayushh"},
    {userid:2,name:"Suraj"},
    {userid:3,name:"Adesh"}
]

const[user1,user2,user3]=array;
console.log(user1,user2);

const[{name:firstname,ID}, , {userid}]=array;
console.log(firstname);
console.log(ID);
console.log(userid);

