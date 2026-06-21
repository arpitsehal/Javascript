# Functions & Scope

**What it is:** Reusable code blocks that take inputs and can give back a result. Scope is where variables are allowed to be used.

## Key points
- Make a function with `function name() {}` and run it with `name()`.
- Give values (parameters) to make it dynamic.
- `return` sends a value back; `return` alone just exits the function.
- No argument passed = that parameter is `undefined`.
- `...num` (rest) collects many arguments into an array.
- You can pass an object and read its properties inside.
- Function expression: store a function in a variable: `const addTwo = function(num){}`.
- Arrow function: shorter syntax `const add = (a, b) => a + b`.
- Arrow functions have no own `this`; they borrow `this` from outside.
- `this` inside an object method = that object.
- Scope = `{ }` braces. `let` and `const` stay inside their block.
- A child function can read its parent's variables, but not the reverse.

```js
function addTwoNumbers(a, b) { return a + b; } // 15

const add = (num1, num2) => { return num1 + num2; };

function calculateCartPrice(...num) { return num; } // [100,200,300]

function one() {
  const username = "Arpit";
  function two() { console.log(username); } // can read parent's var
  two();
}
```

## Interview Qs
- What does `return` do, and what if there is no `return`?
- How is an arrow function different from a normal function?
- Can a child function use a variable from its parent function?
