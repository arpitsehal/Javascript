const sym = Symbol("unique"); // Symbol -> a guaranteed-unique value, used for unique object keys

const JsUser = { // object literal (the common way to make an object)
    name: "John",
    age: 30,
    location: "New York",
    email: "jhon@gmail.com",
    isLoggedIn: true,
    [sym]: "This is a unique property" // computed key: use a variable/Symbol as the key
};

// ---- Accessing properties ----
console.log(JsUser.email);    // dot notation
console.log(JsUser["email"]); // bracket notation (needed when the key is in a variable or has spaces)
console.log(JsUser[sym]);     // Symbol keys MUST be read with brackets

// ---- Changing a value ----
JsUser.email = "jhon@google.in";
console.log(JsUser.email);

// ---- Object.freeze: locks the object so properties can't be changed or added ----
// Object.freeze(JsUser); // (left commented so the changes below still work)
JsUser.email = "jhon@chatgpt.com"; // would be silently ignored if the object were frozen
console.log(JsUser.email);

console.log(JsUser);

// ---- Adding a method; `this` refers to the object the method is called on ----
JsUser.greeting = function() {
    console.log(`Hello, ${this.name}!`);
};
console.log(JsUser.greeting());
// Note: greeting() prints a message but doesn't `return` anything, so console.log also shows undefined.

/*
  INTERVIEW NOTES:
  - Dot vs bracket: use brackets when the key is dynamic (a variable), has spaces, or is a Symbol.
  - Object.freeze(obj) -> makes it read-only (shallow: nested objects can still change).
    Object.seal(obj)  -> can edit existing props but cannot add/remove props.
  - `this` inside a method = the object that called it.
  - Symbol keys are unique and are skipped by for...in and Object.keys().
*/
