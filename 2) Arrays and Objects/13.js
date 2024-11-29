// How to iterate objects

const person1={
    name:"Suraj",
    age:21,
    "person hobbies":["getting laid", "cleaning dishes", "waiting for his hubby"]
}

// for in loop
// Object.keys
for(let key in person1){
    console.log(key);
}

for(let key in person1){
    console.log(person1[key]);
}

for(let key in person1){
    // console.log(key, ":", person[key]);
    console.log(`${key} : ${person1[key]}`);
}


console.log(Object.keys(person1));

for(let key of Object.keys(person1)){
    console.log(person1[key]);
}