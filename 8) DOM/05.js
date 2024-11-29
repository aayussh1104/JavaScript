// get and set attribute
// get attribute is used to get the attributes inside the element for example href attribute from anchor tag
// set attribute is used to set attributes


const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1));    // we have used slice method to remove the first letter written inside the href
link.setAttribute("href", "https://hianime.to/");
console.log(link.getAttribute("href"));  // this is to see if we get the attribute in href changed or not


const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));

