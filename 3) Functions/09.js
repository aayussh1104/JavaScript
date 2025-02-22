// Parameter destructuring
// We use this with object
// And we mostly use this in react

const person={
    name:"Aayush Gupta",
    gender: "Male"
};

// function getDetails(obj){
//     console.log(obj.name);
//     console.log(obj.gender);
// }

function getDetails({name,gender,age}){
    console.log(name);
    console.log(gender);
    console.log(age);
}

getDetails(person);

