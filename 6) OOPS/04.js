// apply method

console.log("ABOUT apply METHOD");

// there is not much difference in apply and call, it also works the same

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
  
about.apply(user2, ["temporary love", "One Direction"]);
about.apply(user1, ["temporary love", "One Direction"]);

// in call we were passing the extra arguments normally in this we will make a list or array of it and pass it 
// and it will print normally not in as array or list