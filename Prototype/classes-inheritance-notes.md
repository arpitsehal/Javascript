# Classes, Constructor, Static & Inheritance — Interview-Ready Notes

---

## 1. Classes Are Syntactic Sugar

- ES6 `class` is **not** a new object model — it's cleaner syntax over **constructor functions + prototypes**.
- Behind the scenes, class methods still live on `ClassName.prototype`, and instances link to it via `__proto__`.
- So everything from the prototype notes still applies; `class` just makes it readable.

```js
class User {
  constructor(username, email, password){
    this.username = username;   // own (per-instance) properties
    this.email = email;
    this.password = password;
  }
  encryptPassword(){ return `${this.password} encrypted`; }  // on User.prototype (shared)
}
const arpit = new User('arpit', 'a@g.com', '1234');
```

---

## 2. The `constructor`

- A special method that runs **automatically** on `new ClassName(...)`.
- Job: initialize the instance's **own** properties (`this.x = ...`).
- Only one constructor per class. If omitted, JS provides an empty default (and calls `super()` in subclasses).

---

## 3. Instance Methods vs `static` Members

| | Instance method | `static` member |
|--|-----------------|-----------------|
| Lives on | `Class.prototype` | the **class itself** |
| Called on | an instance: `obj.method()` | the class: `Class.method()` |
| `this` refers to | the instance | the class |
| Inherited by instances? | ✅ yes | ❌ no |

```js
class User {
  static createId(){ return `123::random-id`; }  // utility/factory on the class
}
User.createId();     // ✅ works
arpit.createId();    // ❌ TypeError — static members aren't on instances
```

- **Use static for:** factory methods, helpers, counters — logic tied to the class concept, not to one object (e.g. `Array.isArray()`, `Object.keys()` are static).

---

## 4. Inheritance — `extends` & `super`

```js
class User {
  constructor(name){ this.name = name; }
  logMe(){ console.log(`My name is ${this.name}`); }
}

class Teacher extends User {        // Teacher IS-A User
  constructor(name, subject){
    super(name);                    // call parent constructor FIRST
    this.subject = subject;         // then add child-specific props
  }
  addCourse(){ console.log(`${this.subject} added by ${this.name}`); }
}
```

- `extends` sets up the prototype chain so the child **inherits** the parent's methods.
- `super(...)` calls the **parent's constructor**; `super.method()` calls a parent method.
- ⚠️ **Rule:** in a subclass constructor you **must call `super()` before using `this`** — otherwise `ReferenceError`.
- The child can add its own methods and **override** inherited ones.

---

## 5. `instanceof`

Checks whether an object appears in a constructor's prototype chain.

```js
const iceTea = new Teacher('iceTea', 'JS');
iceTea instanceof Teacher;  // true
iceTea instanceof User;     // true  (Teacher extends User)
new User('x') instanceof Teacher; // false (a User is not a Teacher)
```

---

## 6. Rapid-Fire Interview Q&A

**Q: Are JS classes real classes?**
No — they're syntactic sugar over constructor functions and the prototype chain.

**Q: What is the `constructor`?**
A method auto-invoked by `new` to initialize an instance's own properties.

**Q: Where do class methods live?**
On `ClassName.prototype`, shared across all instances (memory efficient).

**Q: What is a `static` method/property?**
A member on the class itself, called as `Class.member()`. It isn't accessible from instances and `this` inside it is the class. Good for factories/utilities.

**Q: What do `extends` and `super` do?**
`extends` links child→parent for inheritance; `super()` calls the parent constructor, `super.method()` calls a parent method.

**Q: Why must `super()` come before `this` in a subclass?**
Because the parent constructor is what sets up `this` for the subclass; using `this` first throws a ReferenceError.

**Q: Difference between overriding and overloading?**
JS supports **overriding** (child redefines an inherited method). Classic overloading (same name, different signatures) isn't a language feature — handled via argument checks.

**Q: What does `instanceof` check?**
Whether a constructor's `prototype` exists anywhere in the object's prototype chain.

---

## 7. Mental Model / TL;DR

```
- class            →  sugar over constructor function + prototype.
- constructor      →  runs on `new`, sets per-instance `this.*`.
- methods          →  live on the prototype, shared by instances.
- static           →  on the CLASS, not instances (Class.method()).
- extends          →  child inherits parent (prototype chain).
- super()          →  call parent constructor — BEFORE using `this`.
- instanceof       →  is this object in that constructor's chain?
```
