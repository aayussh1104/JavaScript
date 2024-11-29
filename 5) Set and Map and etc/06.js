// Optional chaining

const user={
    firstname: "aayush",
//     address : {housenumber : '14'}
}

console.log(user.firstname);
console.log(user?.address?.housenumber);  // we use this when we dont want to get the error and we want to get undefined this means if the address doesnt contain housenumber dont go any further just return what it is and it is undefined

// we use this when we dont want any error
// it is mostly used in nested objects like upper one