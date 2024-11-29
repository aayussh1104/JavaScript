// Lexical scope

function mainFunc(){
    const myVar="value1";

    const myfunc1=()=>{
        const myVar="value2";   // if we comment out this value1 will be printed and this will also apply if the myVar is written outside the mainFunc
        console.log("inside myfunc1",myVar);
    }

    myfunc1();
    console.log("Main function");
}
mainFunc();