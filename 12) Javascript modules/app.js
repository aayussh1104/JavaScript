import { age } from "./utils/age.js";
import { firstname } from "./utils/fname.js";
import Person, { Person2 } from "./utils/person.js";


console.log(firstname, age);

const person = new Person("Aayush", "Gupta", 20);
person.info();

const person2 = new Person2("Shubhi", "Gupta", 20);
person2.info();


// we can store some big functions like this in different files and export them and then import them in our files

// we can export anything const, classes, functions, arrays, objects etc etc anything