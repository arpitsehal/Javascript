# Prototype in JavaScript — Interview-Ready Notes

--- 

## 1. The One-Line Definition

> Every JavaScript object has a hidden internal link (`[[Prototype]]`, accessed via `__proto__`) to another object called its **prototype**. When you access a property/method that doesn't exist on the object itself, JS walks up this chain of prototypes until it finds it or reaches `null`.

```
myObject  →  someProto  →  Object.prototype  →  null
```

This is **prototypal inheritance** — JavaScript's native inheritance model (no classes needed under the hood; `class` is syntactic sugar over this).

---

## 2. Functions Are Objects

- Arrays, strings, functions — **everything non-primitive is an object** in JS.
- Because functions are objects, they can hold properties:

```js
function multiplyBy5(num){ return num * 5 }
multiplyBy5.power = 2
multiplyBy5.power         // 2
multiplyBy5.prototype     // {} — every function gets a `prototype` object by default
```

- **Key distinction (common interview trap):**
  - `fn.prototype` → the object that becomes the `__proto__` of instances created with `new fn()`.
  - `obj.__proto__` → the actual prototype an object is linked to.
  - `fn.prototype` is **only** used when the function is called as a constructor with `new`.

---

## 3. The `new` Keyword — 4 Steps (must-know)

When you call `new User("chai", 25)`, JavaScript does:

1. **Creates** a brand new empty object `{}`.
2. **Binds** `this` inside the constructor to that new object and runs the function body.
3. **Links** the new object's `__proto__` to `User.prototype`.
4. **Returns** `this` automatically — *unless* the constructor explicitly returns its own object.

```js
function User(username, score){
  this.username = username
  this.score = score
}
User.prototype.increment = function(){ this.score++ }

const chai = new User("chai", 25)
chai.increment()   // found via chai.__proto__ === User.prototype
```

- **Why put methods on `prototype` instead of inside the constructor?**
  Methods on the prototype are **shared once** across all instances (memory efficient). Methods defined inside the constructor are **re-created per instance** (wasteful).
- **What if you forget `new`?** `this` is `undefined` (strict mode) or the global object (sloppy mode) → bugs / silent global pollution.

---

## 4. The Prototype Chain in Action

```js
const hero = ["thor", "spiderman"]          // Array → Array.prototype → Object.prototype → null
const heroPower = { thor: "hammer" }        // Object → Object.prototype → null

Object.prototype.hitesh = function(){ /* ... */ }  // reachable from EVERY object
Array.prototype.heyHitesh = function(){ /* ... */ } // reachable only from arrays

heroPower.hitesh()   // works
hero.hitesh()        // works (array is also an object)
hero.heyHitesh()     // works
heroPower.heyHitesh() // ❌ ERROR — heyHitesh lives only on Array.prototype
```

- Lookup order: **own property → object's prototype → its prototype → … → `Object.prototype` → `null`** (returns `undefined` if never found).
- ⚠️ **Don't modify built-in prototypes in production** (`Object.prototype`, `Array.prototype`). Shown here for teaching; in real code it breaks `for...in`, collides with libraries, and is considered an anti-pattern.

---

## 5. Setting Inheritance Between Objects

```js
const User = { name: "chai", email: "chai@google.com" }
const Teacher = { makeVideo: true }

// ❌ Old / deprecated:
Teacher.__proto__ = User

// ✅ Modern / recommended:
Object.setPrototypeOf(Teacher, User)

Teacher.email  // "chai@google.com" — inherited from User up the chain
```

| Approach | Verdict |
|----------|---------|
| `obj.__proto__ = proto` | Works but **deprecated**, non-standard historically, slow |
| `Object.setPrototypeOf(obj, proto)` | **Preferred** for changing an existing object's prototype |
| `Object.create(proto)` | **Preferred** for creating a new object with a chosen prototype |

---

## 6. Extending `String.prototype` (real-world-ish example)

```js
String.prototype.trueLength = function(){
  console.log(`True length is: ${this.trim().length}`)
}
"ChaiAurCode     ".trueLength()  // ignores trailing whitespace
```

- Inside the method, `this` is the string wrapper object; `this.trim()` gives the real content length.
- Demonstrates how **all string values** instantly gain the method via the shared prototype.

---

## 7. Rapid-Fire Interview Q&A

**Q: What is a prototype?**
An object that another object links to, used to share properties/methods and enable inheritance via the prototype chain.

**Q: Difference between `__proto__` and `prototype`?**
`prototype` is a property **on constructor functions** — the blueprint for instances' prototype. `__proto__` is the **actual link on every object** to its prototype. `instance.__proto__ === Constructor.prototype`.

**Q: What does `new` do?**
Creates an empty object, binds `this` to it, links it to the constructor's `prototype`, runs the body, and returns `this`. (The 4 steps above.)

**Q: How does property lookup work?**
Own property first, then up the prototype chain until found or `null` → then `undefined`.

**Q: Why define methods on the prototype?**
Shared across all instances → saves memory vs. defining inside the constructor (which copies per instance).

**Q: How to set one object's prototype to another?**
`Object.setPrototypeOf(child, parent)` (modern) or `Object.create(parent)`; avoid `__proto__` assignment.

**Q: Where does every chain end?**
At `Object.prototype`, whose prototype is `null`.

**Q: Is `class` different from prototypes?**
No — ES6 `class` is **syntactic sugar** over constructor functions + prototypes.

---

## 8. Mental Model / TL;DR

```
- Everything object-like has __proto__  →  a hidden link upward.
- Constructor functions have .prototype  →  the object instances link to.
- new  →  {} + bind this + link __proto__ + return this.
- Missing property?  →  walk up the chain until found or null.
- Share methods on the prototype; end of the road is Object.prototype → null.
```
