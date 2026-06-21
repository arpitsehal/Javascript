# Objects

**What it is:** A way to store data as key-value pairs inside `{ }`.

## Key points
- Make one with a literal: `const user = { name: "John" }`.
- Empty object: `{}` (preferred) or `new Object()`.
- Read values: dot `user.email` or bracket `user["email"]`.
- Use brackets when the key is a variable or a Symbol.
- `Symbol("x")` makes a unique key, read with brackets: `obj[sym]`.
- Change a value: `user.email = "new@mail.com"`.
- Add a method (function); `this` means the current object.
- `Object.freeze(obj)` stops any changes to the object.
- Nested object = an object inside another object.
- DB data often comes as an array of objects: `user[0].name`.

```js
const user = { name: "John", email: "a@b.com" };
user.email = "new@b.com";        // change a value
user.greeting = function() {
  console.log(`Hello, ${this.name}!`);
};
```

## Merging objects
- `Object.assign({}, obj1, obj2)` merges into a new object.
- Spread `{...obj1, ...obj2}` is the modern, easier way.

## Looping helpers
- `Object.keys(obj)` returns keys. `Object.values(obj)` returns values.
- `Object.entries(obj)` returns key-value pairs.

## Destructuring
- Pull a value out by name: `const { instructor } = course;`.

## Interview Qs
- How to access a key stored in a variable? Use bracket notation.
- What does `Object.freeze` do? Blocks changes to the object.
- Two ways to merge objects? `Object.assign` or spread `{...}`.
