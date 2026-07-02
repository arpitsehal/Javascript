# Property Descriptors — Interview-Ready Notes

---

## 1. What Is a Property Descriptor?

Every property on an object has hidden **meta-flags** describing how it behaves. Read them with `Object.getOwnPropertyDescriptor(obj, key)`:

```js
Object.getOwnPropertyDescriptor(Math, 'PI');
// { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }
```

| Flag | Meaning |
|------|---------|
| `value` | the actual stored value |
| `writable` | can the value be **reassigned**? |
| `enumerable` | does it show up in `for...in` / `Object.keys` / `Object.entries` / `JSON.stringify`? |
| `configurable` | can the descriptor be **changed or the property deleted**? |

---

## 2. Built-ins Are Locked

`Math.PI` is `writable:false, enumerable:false, configurable:false` — it's a constant by design.

```js
Math.PI = 5;
console.log(Math.PI);  // still 3.141592653589793 (assignment silently ignored)
```

- In **strict mode**, writing to a non-writable property **throws** instead of failing silently.

---

## 3. Your Own Properties Default to `true`

For properties you create with object literals, all three flags default to `true`:

```js
const Arpit = { name: "Arpit", age: 20, city: "Delhi" };
Object.getOwnPropertyDescriptor(Arpit, 'name');
// { value: 'Arpit', writable: true, enumerable: true, configurable: true }
```

---

## 4. Changing Flags with `Object.defineProperty`

```js
Object.defineProperty(Arpit, 'name', {
  writable: false,     // read-only
  enumerable: false,   // hidden from loops / keys / JSON
  configurable: false  // descriptor now frozen
});

Arpit.name = "Changed";
console.log(Arpit.name);      // still "Arpit"
```

⚠️ **Gotcha:** when you use `defineProperty` to add a *brand-new* property, the flags default to **`false`** (opposite of literal syntax). You must opt them in explicitly.

---

## 5. `enumerable` in Action

A non-enumerable property is skipped by iteration helpers:

```js
for (let [key, value] of Object.entries(Arpit)) {
  if (typeof value !== 'function') console.log(`${key} : ${value}`);
}
// age : 20
// city : Delhi        <- `name` hidden (enumerable:false)
```

Use non-enumerable for internal/utility props you don't want serialized or looped.

---

## 6. Rapid-Fire Interview Q&A

**Q: What is a property descriptor?**
The set of meta-flags (`value`, `writable`, `enumerable`, `configurable`) that define how a property behaves.

**Q: How do you read/set them?**
Read with `Object.getOwnPropertyDescriptor(obj, key)`; set with `Object.defineProperty(obj, key, descriptor)`.

**Q: Difference between `writable` and `configurable`?**
`writable` controls changing the **value**; `configurable` controls changing the **descriptor itself** (and whether the property can be deleted).

**Q: Why doesn't `Math.PI = 5` work?**
`Math.PI` is `writable:false`; the assignment is ignored (throws in strict mode).

**Q: What does `enumerable:false` affect?**
Hides the property from `for...in`, `Object.keys`, `Object.entries`, and `JSON.stringify`.

**Q: Default flags — literal vs `defineProperty`?**
Object-literal properties default all flags to **true**; properties added via `defineProperty` default to **false**.

**Q: If `configurable:false`, what can you still do?**
If `writable` is still `true` you can change the value, but you can't delete the property or reconfigure other flags (except toggling `writable` true→false once).

---

## 7. Mental Model / TL;DR

```
- Every property carries: value / writable / enumerable / configurable.
- getOwnPropertyDescriptor  →  read the flags.
- defineProperty            →  set the flags (new props default to FALSE).
- writable:false     →  value can't change (throws in strict mode).
- enumerable:false   →  hidden from loops / keys / JSON.
- configurable:false →  descriptor frozen, property can't be deleted.
- Math.PI  =  the poster child: all three locked.
```
