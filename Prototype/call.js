// ============================================================
//  call() and `this` in JavaScript  —  chai aur javascript
// ============================================================
// Problem: when one function calls another plain function, the
// inner function gets its OWN `this`. It does NOT inherit the
// outer function's `this`. call() lets us fix (borrow) `this`.

function setUsername(username){
    // Imagine expensive work here (DB writes, validation, etc.).
    // `this` depends on HOW this function is called.
    this.username = username
    console.log("setUsername called")
}

function createUser(username, email, password){
    // ❌ Plain call: setUsername runs with its own execution context.
    //    In non-strict mode `this` = global object; in strict/module
    //    mode `this` = undefined -> username never lands on our object.
    // setUsername(username)

    // ✅ call(): invoke setUsername but FORCE its `this` to be the
    //    `this` of createUser (the new object being built).
    //    Signature: fn.call(thisArg, arg1, arg2, ...)
    setUsername.call(this, username)

    this.email = email
    this.password = password
}

// `new` builds a fresh object and binds it to createUser's `this`;
// call() then hands that same object to setUsername so `username` attaches.
const Arpit = new createUser("arpit", "arpit@gmail.com", "1234")
console.log(Arpit)
// -> setUsername called
// -> createUser { username: 'arpit', email: 'arpit@gmail.com', password: '1234' }


// ------------------------------------------------------------
//  call vs apply vs bind  (interview must-know)
// ------------------------------------------------------------
function greet(greeting, punctuation){
    console.log(`${greeting}, ${this.name}${punctuation}`)
}

const person = { name: "Arpit" }

// call  -> runs now, args passed individually
greet.call(person, "Hello", "!")        // Hello, Arpit!

// apply -> runs now, args passed as an ARRAY
greet.apply(person, ["Hi", "."])        // Hi, Arpit.

// bind  -> does NOT run; returns a NEW function with `this` locked in
const greetArpit = greet.bind(person, "Hey")
greetArpit("?")                         // Hey, Arpit?
