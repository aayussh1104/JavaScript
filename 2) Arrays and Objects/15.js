// spread operator

const obj={
    key1:"value1",
    key2:"value2",
    key1:"value5"  // this will override the first key
}
console.log(obj);

console.log("Spread operator:");
const obj1={
    key1:"value1",
    key2:"value2",
};

const obj2={
    key1:"valueUnique", // This will override the above key1 because we are creating a new object so the second one will override the first one
    key3:"value3",
    key4:"value4",
};

const newobj={...obj1,...obj2, key69:"value69"};
console.log(newobj);
const newobj1={..."abc"};
console.log(newobj1);
const newobj2={...["item1","item2","item3","item4"]};
console.log(newobj2);

