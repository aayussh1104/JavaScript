// new keyword
function createUser(firstname, age){
    // this={} empty object
    this.firstname=firstname;
    this.age=age;
}
createUser.prototype.about= function(){
    console.log(this.firstname,this.age);
}
const user1 = new createUser("aayush",20);
// new keyword is doing three things here
// 1) creating an empty object and  this={empty object}
// 2) return this or empty object
// 3) Object.create(createUser) => this work or chaining will be done directly by the new and this keyword

console.log(user1);
user1.about();