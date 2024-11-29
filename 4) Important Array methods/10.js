// splice METHOD
// start, delete, insert

const myArray=['item1', 'item2', 'item3', 'item4'];

// To delete
myArray.splice(1,1);
console.log(myArray);

const myArray2=['item1', 'item2', 'item3', 'item4'];

// To insert
myArray2.splice(2, 0 ,'newItem');
console.log(myArray2);

const myArray3=['item1', 'item2', 'item3', 'item4'];

// To insert and delete together
myArray3.splice(1,2,'insertedItem');
console.log(myArray3);
