// ==================================================================
//  Property descriptors  —  chai aur javascript ("Now you know Objects")
// ==================================================================
// Every property has hidden meta-flags (a "descriptor"):
//   value        -> the actual value
//   writable     -> can the value be changed?
//   enumerable   -> does it show up in loops / Object.keys / JSON?
//   configurable -> can the descriptor itself be changed/deleted?

// ---------- Built-in properties are locked down ----------
const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor);
// { value: 3.141592653589793,
//   writable: false, enumerable: false, configurable: false }
console.log(descriptor.value);   // 3.141592653589793

// Because writable:false, this assignment is silently ignored
// (throws in strict mode). Math.PI can never be reassigned.
Math.PI = 5;
console.log(Math.PI);            // still 3.141592653589793


// ---------- Our own object: descriptors default to true ----------
const Arpit = {
    name: "Arpit",
    age: 20,
    city: "Delhi",
    greet: function(){ console.log("Hello!"); }
}

// For user-defined properties, writable/enumerable/configurable all
// default to true.
console.log(Object.getOwnPropertyDescriptor(Arpit, 'name'));
// { value: 'Arpit', writable: true, enumerable: true, configurable: true }

// ---------- Locking a property with defineProperty ----------
// Make `name` read-only and hidden from loops.
Object.defineProperty(Arpit, 'name', {
    writable: false,    // can't reassign Arpit.name anymore
    enumerable: false,  // won't appear in for...of / Object.entries below
    configurable: false // descriptor is now frozen
});

console.log(Object.getOwnPropertyDescriptor(Arpit, 'name'));
// { value: 'Arpit', writable: false, enumerable: false, configurable: false }

Arpit.name = "Changed";          // ignored (writable:false)
console.log(Arpit.name);         // still "Arpit"

// ---------- enumerable in action ----------
// `name` is skipped because enumerable:false; functions filtered out too.
for (let [key, value] of Object.entries(Arpit)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
// -> age : 20
// -> city : Delhi      (name is hidden, greet is a function)
