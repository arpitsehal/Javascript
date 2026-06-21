// ---- STACK: stores PRIMITIVES (string, number, boolean, null, undefined, symbol, bigint) ----
// Fast, fixed-size, and copied BY VALUE.

let name = "Arpit";
let anotherName = name;   // copies the VALUE -> anotherName gets its own independent copy
anotherName = "Sehal";    // changing the copy does NOT affect the original
console.log(name);        // "Arpit"  (unchanged)
console.log(anotherName); // "Sehal"

// ---- HEAP: stores REFERENCES / objects (object, array, function) ----
// Copied BY REFERENCE -> the variable holds the ADDRESS, not the data itself.

let user1 = {
    email : "arpit@gmail.com"
};
let user2 = user1;                 // copies the REFERENCE -> both point to the SAME object
user2.email = "sehal@gmail.com";   // editing through user2 also changes user1
console.log(user1.email);          // "sehal@gmail.com"  (changed!)
console.log(user2.email);          // "sehal@gmail.com"

/*
  INTERVIEW NOTES:
  - Stack = primitives, copy by VALUE (independent copies).
  - Heap  = objects/arrays/functions, copy by REFERENCE (shared).
  - This is why editing one object variable can affect another.
  - To copy an object WITHOUT sharing, clone it: {...obj} or structuredClone(obj).
    Note: {...obj} is a SHALLOW copy (nested objects are still shared).
  - "Call by value" vs "call by reference" applies when passing args into functions too.
*/
