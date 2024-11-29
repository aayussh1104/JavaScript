// Rest parameters

function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}

myFunc(3,2,5,7,8,1,4);

function addAll(...numbers){
    console.log(numbers);
    console.log(Array.isArray(numbers));

    let total=0;
    for(let i=0;i<numbers.length;i++){
        total=total+i;
    }
    return total;
}

console.log(addAll(1,2,3,4,5));