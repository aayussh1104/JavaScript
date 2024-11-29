// About map in this

// To give elements to a map directly
const person = new Map([['firstname','aayush'],['age',20],['college','Galgotias University']]);
console.log(person);

// Arealistic example of Map

const person1={
    id: 1,
    'name':'aayush'
};
// we have to add additional things in this object but we have to use map for it and not object

const userInfo=new Map();
userInfo.set(person1, {age:20,gender:'male'});
console.log(person1.id);
console.log(userInfo.get(person1));
console.log(userInfo.get(person1).gender);


