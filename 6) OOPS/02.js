// console.log(window);

function info(){
    "use strict" // we can use it  outside the function too, if we don't use strict mode window object will come in the console and if we use it undefined will come
    console.log(this);
}
info();
