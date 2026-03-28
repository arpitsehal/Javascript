const sym = Symbol("unique"); // symbol is a unique identifier. It is used to create unique property keys for objects.

const JsUser = { // object literal
    name: "John",
    age: 30,
    location: "New York",
    email: "jhon@gmail.com",
    isLoggedIn: true,
    [sym]: "This is a unique property" // using symbol as a property key
} 

// how to access object properties

console.log(JsUser.email) // U can access object properties using dot notation but it is not a good practice.
console.log(JsUser["email"]) // U can access object properties using bracket notation and it is a good practice. It is also used when the property name is stored in a variable.
console.log(JsUser[sym]) // U can access symbol properties using bracket notation.

// how to change values of an object
JsUser.email = "jhon@google.in" // changing the value of email property
console.log(JsUser.email) // output: jhon@google.in

// how to freeze an object so that no one can change the properties of the object.
// Object.freeze(JsUser) // freezing the object to prevent any changes to the object properties.
JsUser.email = "jhon@chatgpt.com" // Unable to overwrite the email property because the object is frozen.
console.log(JsUser.email) // output: jhon@google.in

// final data structure of the object
console.log(JsUser) 

JsUser.greeting = function() { // adding a function to the object
    console.log(`Hello, ${this.name}!`) // this keyword refers to the current object, which is JsUser in this case.
}

console.log(JsUser.greeting()); // output: undefined because the object is frozen and we cannot add new properties to it. after i commented the Object.freeze() method, the greeting function is added to the object and it works as expected.
