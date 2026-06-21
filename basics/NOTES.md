# JavaScript Basics

**What it is:** Variables, data types, type conversion, basic operators, and output.

## Printing
- `console.log()` prints a value.
- `console.table([...])` prints many values in a table.
```js
console.log("Hello, World!");
console.table([accountId, email]);
```

## Variables
- `const` — value can't change.
- `let` — value can change.
- `var` — old way, avoid it (function scope + hoisting bugs).
- Declared with no value is `undefined`.

## Data types
- `typeof x` tells the data type.
- Primitive: string, number, boolean, null, undefined, symbol, BigInt (copy the value).
- Non-primitive: object, array, function (share the reference).
```js
let name = "Arpit"   // string
let age = 19         // number
console.log(typeof name)
```

## Type conversion
- `Number("33")`→33, `Number("33abc")`→NaN.
- `true`→1, `false`→0, `null`→0, `undefined`→NaN.

## Operators
- `-value` flips the sign.
- `+` joins strings.
```js
console.log(str1 + " " + str2) // Hello World
```

## Interview Qs
- `let` vs `const` vs `var`? const fixed, let changeable, var old/buggy.
- How to check a type? `typeof`.
- Primitive vs reference? Value copy vs shared reference.
