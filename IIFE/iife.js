// immedietely invoked function expression - it is used to create a new scope and avoid polluting the global namespace
(function chai() {
    console.log("Hello from IIFE");
})();

// at first cover function in (function)() "then add a parenthesis after it"

// for arrow function we can use the same syntax but with arrow function syntax
( () => {
    console.log("Hello from IIFE arrow function");
})();

// this is how we use iife for variables 
( (name) => {
    console.log(`Hello ${name} from IIFE arrow function`);
})("Arpit");