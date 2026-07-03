# Getters & Setters in JavaScript — Interview-Ready Notes

---

## 1. The Core Idea

A **getter** and **setter** let a method behave like a **property**. You read/write it *without parentheses*, but real code runs behind the scenes.

```js
class User {
  constructor(email, password){
    this.email = email;
    this._password = password.toUpperCase(); // assigning here CALLS the setter
  }

  get password(){                 // runs when you READ user1.password
    return this._password.toUpperCase();
  }

  set password(newPassword){      // runs when you WRITE user1.password = "x"
    this._password = newPassword;
  }
}

const user1 = new User("arpit@gmail.com", "password123");
console.log(user1.password);      // PASSWORD123  (no parens — getter ran)
```

**Use them to:** validate input, compute/derive values, hide internal state, or make read-only properties.

---

## 2. The Rules

| Rule | Detail |
|------|--------|
| Access style | Like a property: `user1.password` — **no `()`** |
| Getter args | Takes **zero** arguments |
| Setter args | Takes **exactly one** argument (the new value) |
| Pairing | You can define a getter alone (read-only), a setter alone, or both |

---

## 3. The Backing Field (`_password`) — Why It Matters

The `_` prefix marks an internal "backing field" that stores the real value. It **prevents infinite recursion**:

```js
get password(){
  return this.password;   // ❌ getter calls itself → infinite loop / stack overflow
}

get password(){
  return this._password;  // ✅ plain property read — safe
}
```

- `this._password` is a normal property, so reading/writing it does **not** trigger the getter/setter.
- The `_` is just a **convention** ("treat as private"), not real privacy. True privacy uses `#password` (private class fields).

---

## 4. Common Use Cases

```js
// Validation in a setter
set age(value){
  if (value < 0) throw new Error("Age can't be negative");
  this._age = value;
}

// Computed / derived value (read-only)
get fullName(){
  return `${this.first} ${this.last}`;   // no setter → read-only
}
```

---

## 5. Under the Hood

- Class `get`/`set` are defined on the **prototype** via `Object.defineProperty` using a **get/set descriptor** (not a `value` descriptor).
- They can also be added to plain objects:

```js
const obj = {
  _x: 1,
  get x(){ return this._x; },
  set x(v){ this._x = v; }
};
```

---

## 6. Rapid-Fire Interview Q&A

**Q: How are getters/setters accessed?**
Like properties — `obj.prop`, without parentheses.

**Q: How many arguments can each take?**
Getter: zero. Setter: exactly one.

**Q: Why use a backing field like `_password`?**
To avoid infinite recursion (the accessor referencing itself) and to store the actual value the getter/setter wraps.

**Q: How do you make a property read-only?**
Define a `get` with **no** matching `set`.

**Q: Where do class getters/setters live?**
On the class's **prototype**, defined via `Object.defineProperty` with a get/set descriptor.

**Q: `_password` vs `#password`?**
`_` is a naming convention (still publicly accessible); `#` is a true private field enforced by the language.

---

## 7. Mental Model / TL;DR

```
- getter/setter  →  method that LOOKS like a property (no parens).
- get   →  no args,   runs on READ.
- set   →  one arg,   runs on WRITE.
- _field (backing) →  stores real value, avoids infinite recursion.
- get only          →  read-only property.
- Defined on prototype via Object.defineProperty (get/set descriptor).
```
