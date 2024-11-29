// practice for document tree

const h1 = document.querySelector("h1");
// console.log(h1.parentNode);
const body = h1.parentNode.parentNode;   // we can traverse in tree like this
body.style.color= "#efefef";
body.style.backgroundColor = "#333"

// and this is known as DOM traversing


const body1= document.body;   // we can also see body or head or anything like this
console.log(body1);

const head = document.querySelector("head");   // we can use querySelector in this head also
// console.log(head);
const title = head.querySelector("title");
console.log(title);
console.log(title.childNodes);
// AND WE CAN PUT querySelector on anything i.e. html, head,body like this we did in above


// some times we dont want the text node that contains new line spaces, we only want Node elements so we use this property for it
const container = document.querySelector(".container");
console.log(container.childNodes);  // it will give all the child including text node
console.log(container.children);

