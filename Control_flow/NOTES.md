# Control Flow

**What it is:** Code that decides which lines to run based on conditions.

## Key points
- `if (condition) { }` runs code only when the condition is true.
- `!` flips a condition (true becomes false).
- `if / else if / else` picks one block to run.
- Combine conditions with `&&` (and). Compare with `<, >, <=, >=, ==, ===, !=, !==`.
- `switch` checks a value against many `case`s; use `break` to stop, `default` for no match.
- Truthy = treated as true. Falsy values: `false`, `0`, `-0`, `""`, `null`, `undefined`, `NaN`, `0n`.
- Everything else is truthy, even `[]`, `{}`, `"0"`, `"false"`.
- `??` (nullish) gives the right value only if the left is `null` or `undefined`.
- Ternary: `condition ? ifTrue : ifFalse` is a short if/else.

```js
if (temprature < 41) { console.log("It's a hot day"); }
else if (temprature > 30) { console.log("It's a nice day"); }

switch (month) {
  case 3: console.log("March"); break;
  default: console.log("Invalid month");
}

let val2 = null ?? 10; // 10
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
```

## Interview Qs
- Difference between `==` and `===`?
- Why do we need `break` in a switch?
- What does the `??` operator do?
