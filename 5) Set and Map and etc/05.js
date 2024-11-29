// Clone using object.assign

const obj1={
    key1:"value1",
    key2:"value2"
}

const obj2=obj1;
// const obj3={...obj1};  //cloning using spread operator
const obj3=Object.assign({}, obj1);
obj1.key3="value3";
console.log(obj1);
console.log(obj2);
console.log(obj3);

