# Execution Context and Call Stack

**What it is:** The "box" where JS runs your code, tracked in order on a stack.

## Key points
- JS is **single-threaded** → runs one line at a time, in order.
- An **Execution Context** has 2 parts: **Memory** (variables/functions) + **Code** (runs the lines).
- Types: **Global EC** (runs once at start) and **Function EC** (one per function call).
- Every EC runs in 2 phases:
  1. **Memory phase**: variables set to `undefined`, functions stored fully.
  2. **Execution phase**: real values filled in, code runs line by line.
- **Call Stack**: each EC is **pushed** on; when done it is **popped** off (LIFO).
- Global EC sits at the bottom until the script ends.
- Too many ECs without popping → **"Maximum call stack size exceeded"** (often infinite recursion).

```js
function addNum(a, b) { return a + b; }
let r1 = addNum(10, 5); // new Function EC pushed → returns → popped
```

## Interview Qs
- **What are the 2 phases of an EC?** → Memory, then Execution.
- **What is `var x = 5` in the memory phase?** → `x = undefined`.
- **What causes "Maximum call stack size exceeded"?** → Infinite recursion.
