// fill METHOD
// value,start,end

const myArray = new Array(10).fill(-1);
console.log(myArray);

const myArray2=[1,2,3,4,5,6,7,8,9];
// myArray.fill(value, start, end);    // start and end are the index
myArray.fill(0,2,5);
console.log(myArray);