// functions inside function

function phone(){

    const app=()=>{
        console.log("Open Instagram");
    }

    function add(num1,num2){
        return num1+num2;
    }

    const mul = (number1,number2)=> number1*number2;

    console.log("Opened Phone");
    app();
    console.log(add(8,9));
    console.log(mul(3,2));
}

phone();