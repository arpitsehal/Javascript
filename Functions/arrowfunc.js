const user = {
    name: 'John',
    price: 999,

    // A method = a function stored on an object.
    welcomeMessage: function() {
        console.log(`Welcome ${this.name}!`); // `this` -> the object that CALLED the method (user)
        console.log(this);                    // logs the whole user object
    }
};
user.welcomeMessage();

console.log(this); // top-level: in Node this is {} (module.exports); in a browser it's `window`

// ---- Arrow functions ----
// An arrow function has NO own `this`; it inherits `this` from where it was defined (lexical this).
const chai = () => {
    let username = "Arpit";
    console.log(username);
};
chai();

// Arrow function with parameters and a return
const add = (num1, num2) => {
    return num1 + num2;
};
console.log(add(5, 10)); // 15

/*
  INTERVIEW NOTES (very common topic!):
  - `this` depends on HOW a function is called:
      * obj.method()      -> this = obj
      * plain function()  -> this = undefined (strict mode) or the global object (non-strict)
      * arrow function    -> NO own this; inherits from the surrounding scope (lexical this)
  - So do NOT use an arrow function as an object method when you need `this` to point
    to that object.
  - Implicit return:  (a, b) => a + b   is the same as   (a, b) => { return a + b }.
  - Arrow functions also have no `arguments` object and cannot be used as constructors.
*/
