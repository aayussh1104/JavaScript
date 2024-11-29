// call apply bind
// these three methods are very important in javascript and can be asked about in the interview

console.log("ABOUT call METHOD");

// function hello(){
//     console.log("Hello World!");
// }
// hello.call();
// hello();

// const user1={
//     firstname:"aayush",
//     age:20,
//     about:function(song, favBand){
//         console.log(this.firstname, this.age, song, favBand);
//     }
// }

// const user2={
//     firstname:"nisha",
//     age:17
// }

// user1.about.call();  // this will print two undefined and two unbinded more because we didnt pass the value of two variables because we didnt gave with which object call will be binded
// user1.about.call(user2, "temporary love", "One Direction");  // in call method we passes the object with which this keyword is binded, it is necessary to do so


function about(song, favBand){
    console.log(this.firstname, this.age, song, favBand);
}

const user1={
    firstname:"aayush",
    age:20,
}

const user2={
    firstname:"nisha",
    age:17
}
  
about.call();
about.call(user2, "temporary love", "One Direction");
about.call(user1, "temporary love", "One Direction");