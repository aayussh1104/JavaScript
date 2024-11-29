// Sets (it is iterable)
// store data
// sets also have its own methods
// No-index based access
// Order is not guarranted
// Unique items only, no duplicates allowed


// syntax of sets
const numbers= new Set([1,2,3,4,5]);
console.log(numbers);
const string1=new Set("abcdefghijklmnopqrstuvwxyz");
console.log(string1);

// Adding data in a Set
const newSet=new Set();
newSet.add(1);
newSet.add(2);
newSet.add(2); // Similar elements will be ignored
newSet.add(3);
newSet.add(4);
newSet.add('aayush');
newSet.add(numbers); // Adding another set or you can add an array too like this
console.log(newSet);

//  To check if something present inside the set or not we use has method, it returns in true or false
if (newSet.has(1)){
    console.log("1 is present");
}else{
    console.log("1 is not present");
}


// Applying for of loop on Set
for(let new1 of newSet){
    console.log(new1);
}

// WE SHOULD USE SET WHEN WE KNOW WE HAVE THE VALUES UNIQUE, FOR EXAMPLE WE SHOULD CREATE SET FOR ID, ROLL NUMBERS

const myArray=[1,2,3,4,5,3,2,6,7,5,8];
const uniqueElements=new Set(myArray);
console.log(uniqueElements);
console.log(uniqueElements.length); // it will give undefined, we cant use length property in Set
console.log(myArray); // putting an array in a set doesnt modify the array

// Length of the set
let length=0;
for(let element of uniqueElements){
    length++;
}
console.log(length);


