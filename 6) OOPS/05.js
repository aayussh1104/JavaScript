// bind method
// bind will return a function
console.log("ALL ABOUT bind METHOD");

function about(song, favBand){
    console.log(this.firstname, this.age, song, favBand);
}

const user1={
    firstname:"aayush",
    age:20,
}

const user2={
    firstname:"nisha",
    age:17
}
  
const func=about.bind(user1,"temporary love", "One Direction");
func();
