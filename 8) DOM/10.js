const rootNode = document.getRootNode();
console.log(rootNode);

const htmlElementnode = rootNode.childNodes[0];
console.log(htmlElementnode);

console.dir(htmlElementnode);  // to see in object form


// Child relationship
console.log(htmlElementnode.childNodes);      // NodeList(3) [head, text, body]    // this text node contains new line spaces in it

const headNode = htmlElementnode.childNodes[0];
const textNode = htmlElementnode.childNodes[1];
const bodyNode = htmlElementnode.childNodes[2];

console.log(headNode);
console.log(textNode);
console.log(bodyNode);


// Parent relationship
console.log(headNode.parentNode);


// Sibling relationship
console.log(headNode.nextSibling);

console.log(headNode.nextSibling.nextSibling);    // we can traverse like this from sibling to sibling

console.log(headNode.nextElementSibling);    // with this property we can ignore the new line spaces in between elements


console.log(headNode.childNodes);
