// ============================================================
//  OBJECT-ORIENTED PROGRAMMING (OOP) in JavaScript — intro
// ============================================================
//  OOP = a way to organise code around "objects" that bundle
//  related DATA (properties) and BEHAVIOUR (methods) together.
// ============================================================


// ---------- An object literal ----------
// `user` is a single object. The key:value pairs are its PROPERTIES.
// A property whose value is a function is called a METHOD.
const user = {
    username : "Arpit",   // property (data)
    loginCount: 8,        // property (data)
    signedIn: true,       // property (data)

    // getUserDetails is a METHOD (a function stored on the object)
    getUserDetails: function(){
        console.log("Got user details from database")
    }

}
console.log(user.username);          // access a property -> "Arpit"
console.log(user.getUserDetails());  // call a method () -> runs it, then logs
                                     // its return value (undefined, no return)


// ---------- Constructor function ----------
// Problem with object literals: each object must be written by hand.
// A CONSTRUCTOR FUNCTION is a reusable blueprint/template that builds
// many similar objects.
//
// Inside it, `this` refers to the NEW object being created.
// Convention: constructor names start with a Capital letter (User).
function User(username, loginCount, isLoggedIn){
    this.username = username        // attach properties to the new object
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this                     // `new` returns `this` automatically,
                                    // so this line is optional
}

// The `new` keyword does 4 things:
//   1. creates a brand new empty object
//   2. sets `this` to point to that new object
//   3. links it to the constructor's prototype
//   4. returns that object automatically
const userOne = new User("Arpit", 10, true)
console.log(userOne)   // -> User { username: 'Arpit', loginCount: 10, isLoggedIn: true }

// Without `new`, every call would reuse/overwrite the same `this`.
// `new` gives each call its own fresh object, so userTwo is separate.
const userTwo = new User("Sehal", 3, false) // it will overwrite previous values. so we add "new" to fix this
console.log(userTwo)   // -> User { username: 'Sehal', loginCount: 3, isLoggedIn: false }
