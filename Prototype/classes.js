// ============================================================
//  Class, constructor & static  —  chai aur javascript
// ============================================================
// ES6 `class` is SYNTACTIC SUGAR over constructor functions +
// prototypes. Under the hood it still uses the prototype chain.

class User {
    // constructor runs automatically when you do `new User(...)`.
    // It initializes each instance's own properties.
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Methods defined here live on User.prototype (shared by all
    // instances), NOT copied onto every object -> memory efficient.
    encryptPassword(){
        return `${this.password} encrypted`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()} changed`;
    }

    // `static` members belong to the CLASS itself, not to instances.
    // You call them on the class (User.createId()), and `this` inside
    // refers to the class. Common for factories/utilities that
    // shouldn't be exposed on every instance.
    static createId(){
        return `123::random-id`;
    }
}

const arpit = new User('arpit', 'arpit@gmail.com', '1234');

console.log(arpit.encryptPassword());  // -> 1234 encrypted   (instance method)
console.log(arpit.changeUsername());   // -> ARPIT changed    (instance method)

// static method is called on the class, not the instance:
console.log(User.createId());          // -> 123::random-id
// console.log(arpit.createId());      // ❌ TypeError: arpit.createId is not a function
//                                     //    (static members are NOT inherited by instances)
