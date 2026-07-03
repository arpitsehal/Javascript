// ============================================================
//  Getters & Setters in JavaScript  —  chai aur javascript
// ============================================================
// get/set let a METHOD act like a PROPERTY. You read/write
// user1.password (no parentheses), but code runs behind it.
// Use them to validate, transform, or hide internal state.
//
// Convention: store the real value in a "backing field" prefixed
// with `_` (here `_password`) and expose it via get/set. This
// avoids infinite recursion (see note at bottom).

class User {
    constructor(email, password){
        this.email = email;
        // Assigning to `password` here actually CALLS the setter below.
        this._password = password.toUpperCase();
    }

    // getter -> runs when you READ user1.password (no ()).
    get password(){
        return this._password.toUpperCase();
    }

    // setter -> runs when you WRITE user1.password = "x".
    // Must take exactly ONE argument (the new value).
    set password(newPassword){
        this._password = newPassword;
    }
}

const user1 = new User("arpit@gmail.com", "password123");
console.log(user1.email);     // arpit@gmail.com
console.log(user1.password);  // PASSWORD123  (getter ran)

// ------------------------------------------------------------
//  Interview notes
// ------------------------------------------------------------
// • Access like a property, not a method: user1.password  (no parens).
// • A getter takes NO args; a setter takes EXACTLY ONE arg.
// • Backing field (`_password`) prevents infinite recursion:
//   if the getter did `return this.password`, it would call itself
//   forever. Reading/writing `_password` is a plain property, safe.
// • Real use cases: validation, computed/derived values, read-only
//   properties (define get but no set), encapsulation.
// • Under the hood these are defined on the prototype via
//   Object.defineProperty with get/set descriptors.
