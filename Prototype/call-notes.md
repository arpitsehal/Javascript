# `call()` and `this` in JavaScript — Interview-Ready Notes

## 1. The Core Problem

When one function calls another **plain** function, the inner function does **not** inherit the outer function's `this`. It gets its **own** execution context.

```js
function setUsername(username){
  this.username = username     // which `this`??
}

function createUser(username, email, password){
  setUsername(username)        // ❌ setUsername gets its OWN `this`
  this.email = email
  this.password = password
}

const u = new createUser("arpit", "a@g.com", "1234")
// u.username is MISSING — it got attached to the wrong `this`
```

- Inside `setUsername`, called plainly, `this` is:
  - `undefined` in **strict mode / ES modules**
  - the **global object** in sloppy mode
- Either way, `username` never lands on the object `createUser` is building.

---

## 2. The Fix — `call()`

`call()` **invokes a function immediately** while explicitly setting what `this` should be.

```js
function createUser(username, email, password){
  setUsername.call(this, username)  // ✅ force setUsername's `this` = createUser's `this`
  this.email = email
  this.password = password
}
```

**Signature:** `fn.call(thisArg, arg1, arg2, ...)`
- `thisArg` → the object to use as `this` inside `fn`
- remaining args → passed to `fn` individually

This is **function/constructor borrowing** — reusing `setUsername`'s logic while pointing it at our object.

---

## 3. `call` vs `apply` vs `bind`

| Method | Executes? | How args are passed | Returns |
|--------|-----------|---------------------|---------|
| `call`  | **Immediately** | individually: `fn.call(obj, a, b)` | function's return value |
| `apply` | **Immediately** | as an **array**: `fn.apply(obj, [a, b])` | function's return value |
| `bind`  | **No** — later | individually (can partially apply): `fn.bind(obj, a)` | a **new function** with `this` locked |

```js
function greet(greeting, punctuation){
  console.log(`${greeting}, ${this.name}${punctuation}`)
}
const person = { name: "Arpit" }

greet.call(person, "Hello", "!")     // Hello, Arpit!
greet.apply(person, ["Hi", "."])     // Hi, Arpit.
const g = greet.bind(person, "Hey")  // returns a function
g("?")                               // Hey, Arpit?
```

- **Memory hook:** *"call = comma, apply = array, bind = bind-it-for-later."*

---

## 4. Why `this` Behaves This Way

`this` is **not** decided by where a function is defined — it's decided by **how it is called** (its call-site):

| Call style | `this` value |
|-----------|--------------|
| `obj.method()` | `obj` |
| `func()` (plain) | `undefined` (strict) / global (sloppy) |
| `new Func()` | the brand-new object being constructed |
| `func.call(obj)` / `.apply(obj)` | `obj` (explicitly set) |
| `func.bind(obj)` then call | `obj` (permanently) |
| Arrow function | inherits `this` from the **enclosing lexical scope** (no own `this`) |

---

## 5. Rapid-Fire Interview Q&A

**Q: What does `call()` do?**
Invokes a function immediately with an explicitly provided `this` value and arguments passed individually.

**Q: Difference between `call` and `apply`?**
Identical, except `call` takes args individually and `apply` takes them as an array.

**Q: Difference between `call`/`apply` and `bind`?**
`call`/`apply` execute the function right away; `bind` returns a **new function** with `this` (and optionally some args) permanently set, to be called later.

**Q: Why did `username` not attach in the plain-call example?**
Because the plain call gave `setUsername` its own `this` (undefined/global), not the object `createUser` was building.

**Q: What determines the value of `this`?**
The **call-site** — how the function is invoked — not where it's defined.

**Q: What's `this` inside an arrow function?**
Arrow functions have no own `this`; they capture `this` from the surrounding lexical scope, so `call`/`apply`/`bind` **cannot** change it.

**Q: What is "function borrowing"?**
Using `call`/`apply`/`bind` to run one object's/function's method with a different object as `this`.

---

## 6. Mental Model / TL;DR

```
- `this` = decided by the CALL, not the definition.
- Plain inner call  →  inner function gets its own (wrong) `this`.
- call(thisArg, ...args)   →  run now,  args listed.
- apply(thisArg, [args])   →  run now,  args as array.
- bind(thisArg, ...args)   →  get a new function, run later.
- Arrow functions ignore call/apply/bind (lexical `this`).
```
