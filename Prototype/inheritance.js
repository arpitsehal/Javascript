// ============================================================
//  Inheritance with classes  —  chai aur javascript
// ============================================================
// `extends` links a child class to a parent so the child inherits
// the parent's methods; `super` calls the parent's constructor/methods.

class User {
    constructor(name){
        this.name = name;
    }
    logMe(){
        console.log(`My name is ${this.name}`);
    }
}

// Teacher IS-A User -> inherits logMe() via the prototype chain.
class Teacher extends User {
    constructor(name, subject){
        // super(name) calls User's constructor FIRST so `this.name`
        // is set up before we add child-specific properties.
        // Must run before using `this` in a subclass constructor.
        super(name);
        this.subject = subject;
    }

    // child-specific method
    addCourse(){
        console.log(`A new course ${this.subject} was added by ${this.name}`);
    }
}

const iceTea = new Teacher('iceTea', 'JavaScript');

iceTea.addCourse();   // -> A new course JavaScript was added by iceTea (own method)
iceTea.logMe();       // -> My name is iceTea            (inherited from User)

const masalaChai = new User('masalaChai');
masalaChai.logMe();   // -> My name is masalaChai
// masalaChai.addCourse();  // ❌ addCourse is only on Teacher, not on plain User

// ---------- instanceof: check position in the prototype chain ----------
console.log(iceTea instanceof Teacher);  // true — direct instance
console.log(iceTea instanceof User);     // true — Teacher extends User
console.log(masalaChai instanceof Teacher); // false — a User is not a Teacher
