// prototype -> object -> null - it is a chain of objects, where each object has a prototype object, and the last object in the chain is null. The prototype object is used to share properties and methods among all instances of a constructor function. When a property or method is accessed on an object, JavaScript looks for it on the object itself first, and if it doesn't find it, it looks up the prototype chain until it finds it or reaches null.
 
// As array, string etc referred to objects, functions are also objects in JavaScript. Functions can have properties and methods just like other objects.

function multiplyBy5(num){
    return num * 5;
}

multiplyBy5.power = 2
console.log(multiplyBy5(3))  // -> 15
console.log(multiplyBy5.power)  // -> 2 
console.log(multiplyBy5.prototype)  // -> {} because multiplyBy5 is a function, it has a prototype property that is an empty object by default. This prototype object can be used to add properties and methods that will be shared among all instances of the function when used as a constructor.



function User(username, score){
    // `this` refers to the new object being constructed when called with `new`.
    this.username = username
    this.score = score
}

// Methods added on the function's `.prototype` are SHARED by every instance.
// They live on the prototype object, not copied onto each instance -> memory efficient.
User.prototype.increment = function(){
    // `this` here is whichever instance called the method (e.g. chai / promo).
    this.score++
}

User.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}

// The `new` keyword does 4 things behind the scenes:
// 1. Creates a brand new empty object ({}).
// 2. Calls the constructor function with `this` bound to that new object.
// 3. Links the new object's internal [[Prototype]] (__proto__) to User.prototype.
// 4. Returns `this` automatically (unless the constructor returns its own object).
const chai = new User("chai", 25)
const promo = new User("promo", 30)

chai.increment()   // 25 -> 26, resolved via chai.__proto__ === User.prototype
chai.printMe()     // -> score is 26

promo.increment()  // 30 -> 31, same shared method, different `this`
promo.printMe()    // -> score is 31

// Without `new`, `this` would be undefined (strict) / global (non-strict) and break.


// ---------- Prototype chain: every object inherits from Object.prototype ----------
// hero is an Array; heroPower is a plain object. Arrays are objects too.
const hero = ["thor", "spiderman"]

const heroPower = {
    thor: "hammer",
    spiderman: "sling",
    // regular function so `this ` points to heroPower at call time
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

// Injecting a method onto Object.prototype makes it reachable from EVERY object,
// because the chain always ends at Object.prototype -> null.
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`)
}

// Injecting onto Array.prototype makes it reachable only from arrays.
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`)
}

heroPower.hitesh()  // works: object -> Object.prototype
hero.hitesh()       // works: array -> Array.prototype -> Object.prototype
hero.heyHitesh()    // works: array -> Array.prototype
// heroPower.heyHitesh()  // ERROR: heyHitesh only lives on Array.prototype, not in an object's chain


// ---------- Inheritance: linking one object's prototype to another ----------
const User2 = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  // old (deprecated) syntax to set prototype
}

// old syntax: set Teacher's prototype to User2 so Teacher inherits name/email
Teacher.__proto__ = User2

// modern, recommended syntax: Object.setPrototypeOf(target, prototype)
// TeachingSupport now inherits from Teacher (and thus from User2 up the chain).
Object.setPrototypeOf(TeachingSupport, Teacher)

console.log(Teacher.email)          // -> chai@google.com (inherited from User2)
console.log(TeachingSupport.email)  // -> chai@google.com (inherited up the chain)


// ---------- Adding behavior to String.prototype ----------
let anotherUsername = "ChaiAurCode     "

// A custom method available on every string primitive/wrapper.
String.prototype.trueLength = function(){
    console.log(`${this}`)                        // the string itself
    console.log(`True length is: ${this.trim().length}`)  // length after trimming spaces
}

anotherUsername.trueLength()  // ignores trailing spaces
"hitesh".trueLength()         // -> True length is: 6
"iceteacode".trueLength()     // -> True length is: 10