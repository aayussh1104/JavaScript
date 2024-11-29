// Computed properties

const key1="objkey1";
const key2="objkey2";

const myValue1="value1";
const myValue2="value2";

// to create an object like this using above variables
// const obj={
//     objkey1: value1,
//     objkey2: value2
// }

const obj={
    [key1]: myValue1,
    [key2]: myValue2
}
console.log(obj);

// Another way to do this

const obj1={};
obj1[key1]=myValue1;
obj1[key2]=myValue2;
console.log(obj1);
