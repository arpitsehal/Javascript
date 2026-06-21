// IIFE = Immediately Invoked Function Expression.
// A function that runs the MOMENT it is defined. Used to create a private scope so its
// variables don't leak into / pollute the global namespace.

// Named IIFE:
(function chai() {              // wrap the function in ( ) to turn it into an expression...
    console.log("Hello from IIFE");
})();                          // ...then ()  immediately calls it

// Arrow-function IIFE:
( () => {
    console.log("Hello from IIFE arrow function");
})();

// IIFE that takes an argument (passed in the final parentheses):
( (name) => {
    console.log(`Hello ${name} from IIFE arrow function`);
})("Arpit");

/*
  INTERVIEW NOTES:
  - Two parts:  (function(){...})  makes it an expression, then  ()  invokes it.
  - Why used: data privacy (a private scope) and avoiding global-variable clashes —
    important before `let`/`const` and ES modules existed.
  - Always end the PREVIOUS statement with a semicolon before an IIFE, or the ( )
    may be read as a function call on the line above (an ASI gotcha).
*/
