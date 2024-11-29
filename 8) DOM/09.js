// innerHTML

const headline= document.querySelector  (".headline");
console.log(headline.innerHTML);  // it will print the innerHTML present inside the headline

headline.innerHTML = "<h1> Inner HTML changed </h1>";
headline.innerHTML += "<button class = \"btn\"> Learn more </button>";   // we use += this to add more to the innerHTML and we cant use double slash or comma in this so we have to use backslash like this to mske it work
console.log(headline.innerHTML);

// \" -------> "