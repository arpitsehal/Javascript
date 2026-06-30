# Object-Oriented Programming (OOP) in JavaScript — Interview Notes

Based on `oop.js`. Quick revision for interviews.

## 1. What is OOP?

**OOP** is a programming style that organises code around **objects** — self-contained units that bundle:
- **Data** → called **properties**
- **Behaviour** → called **methods** (functions stored on the object)

It helps manage complexity, avoid repetition, and model real-world entities.

> JavaScript is a **prototype-based** language, but it fully supports OOP (and ES6 `class` syntax is sugar over prototypes).

## 2. Why do we need OOP?

When code gets large, loose variables and functions become hard to manage. OOP lets us group related state + logic together, reuse blueprints, and keep code organised and scalable.

## 3. Object literal

The simplest way to make a single object:

```js
const user = {
    username: "Arpit",          // property
    loginCount: 8,              // property
    getUserDetails: function(){ // method
        console.log("Got user details");
    }
};

user.username;          // access property  -> "Arpit"
user.getUserDetails();  // call method
```

**Limitation:** you must write every object by hand. For many similar objects we need a blueprint.

## 4. The `this` keyword

`this` refers to the object that is **currently calling** the function — the "context".

```js
const user = {
    username: "Arpit",
    welcome: function(){
        console.log(`Welcome, ${this.username}`); // this = user
    }
};
user.welcome(); // Welcome, Arpit
```

**Common gotcha — `this` in global scope:**

```js
console.log(this.username); // undefined
```
At the top level, `this` is **not** your object. In Node it's `module.exports` (`{}`); in the browser it's `window`. Neither has `username`, so you get `undefined`.

> Arrow functions do **not** have their own `this` — they inherit it from the surrounding scope. Avoid them as object methods when you need `this`.

## 5. Constructor function

A **constructor function** is a reusable blueprint that builds many similar objects.

```js
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // `new` returns `this` automatically
}

const userOne = new User("Arpit", 10, true);
const userTwo = new User("Sehal", 3, false);
```

- Naming convention: start with a **Capital letter** (`User`).
- Inside it, `this` refers to the **new object** being created.

## 6. The `new` keyword — what it does (key interview Q)

When you call a function with `new`, JavaScript performs **4 steps**:

1. Creates a **brand new empty object**.
2. Sets **`this`** to point to that new object.
3. Links the object to the constructor's **`prototype`**.
4. **Returns** that object automatically.

**Without `new`:** every call reuses the same `this`, so values get overwritten and you don't get separate objects. `new` gives each call its **own fresh object**.

## 7. Quick rapid-fire Q&A

- **What are the 4 pillars of OOP?** Abstraction, Encapsulation, Inheritance, Polymorphism.
- **Object literal vs constructor function?** Literal = one object by hand; constructor = blueprint for many objects.
- **What does `this` refer to?** The object that called the function (the execution context).
- **Why does `this.username` give `undefined` globally?** Because global `this` isn't your object (it's `module.exports` / `window`).
- **What does `new` do?** Creates an object, binds `this`, links the prototype, returns the object.
- **Is JS class-based?** No — it's prototype-based; `class` is syntactic sugar over prototypes.

## 8. Key Takeaways

1. OOP groups data (properties) + behaviour (methods) into objects.
2. `this` = whoever is calling the function; it's `undefined`/wrong in global scope.
3. Constructor functions + `new` let you mass-produce objects from one blueprint.
4. `new` = new object → bind `this` → link prototype → return object.
