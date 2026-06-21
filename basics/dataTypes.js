// In a browser you could use alert("hey"); but in Node.js we use console.log() to print.

let name = "Arpit";       // string
let age = 19;             // number
let isLoggedIn = false;   // boolean

console.log(typeof name);       // "string"  -> typeof tells you a value's data type
console.log(typeof age);        // "number"
console.log(typeof isLoggedIn); // "boolean"

/*
  PRIMITIVE types (7): string, number, boolean, null, undefined, symbol, bigint
  - Stored & copied BY VALUE -> copying a variable makes an independent copy.
    Changing the copy does NOT affect the original.

  NON-PRIMITIVE / Reference types: object, array, function
  - Stored & copied BY REFERENCE -> copying copies the *address*, not the data.
    Both variables point to the SAME thing, so changing one changes the other.
*/

// A function stored in a variable = "function expression"
const myFunc = function() {
    console.log("This is a function");
};

/*
  INTERVIEW NOTES:
  - typeof null === "object"  -> famous long-standing JavaScript bug, remember it!
  - typeof function === "function" (functions are special callable objects).
  - Primitive = copy by value; Reference (object/array/function) = copy by reference.
*/
