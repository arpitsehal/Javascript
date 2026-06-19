# How JavaScript Executes Code + Call Stack

> Video: [How does javascript execute code + call stack](https://youtu.be/ByhtOgF6uYM) — Chai aur Code

---

## 1. The Big Picture

JavaScript is **single-threaded** and **synchronous** (by default). It runs code inside an **Execution Context (EC)** — a "box" the JS engine creates to evaluate and run code.

```
       JavaScript Engine
   ┌─────────────────────────┐
   │   Execution Context     │   ← everything runs inside this
   │  ┌───────────────────┐  │
   │  │  Memory (Variable)│  │   ← Phase 1: stores var/func
   │  │     Component     │  │
   │  ├───────────────────┤  │
   │  │   Code (Thread of │  │   ← Phase 2: executes line-by-line
   │  │     Execution)    │  │
   │  └───────────────────┘  │
   └─────────────────────────┘
```

---

## 2. Three Types of Execution Context

| Type | When created | Notes |
|------|-------------|-------|
| **Global EC (GEC)** | When the script first runs | Created once. `this` → `window` (browser) / `global` (Node) |
| **Function EC (FEC)** | Every time a function is **called** | One per call |
| **Eval EC** | Inside `eval()` | Rarely used / avoid |

---

## 3. Two Phases of Every Execution Context

### Phase 1 — Memory Creation Phase (Hoisting)
- Scans the code and allocates memory for all variables and functions.
- Variables → `undefined`
- Functions → full function definition stored

### Phase 2 — Execution Phase
- Runs the code line-by-line.
- Assigns real values to variables, executes function calls.

```
        Phase 1: Memory              Phase 2: Execution
   ┌────────────────────┐        ┌────────────────────┐
   │ val1   : undefined │        │ val1   : 10        │
   │ val2   : undefined │  ───►  │ val2   : 5         │
   │ add    : { fn }    │        │ result : 15        │
   └────────────────────┘        └────────────────────┘
```

---

## 4. Walkthrough Example

```js
let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
```

**Step-by-step:**

1. **GEC created** → Memory phase: `val1=undefined`, `val2=undefined`, `addNum={fn}`, `result1=undefined`, `result2=undefined`.
2. Execution phase: `val1=10`, `val2=5`.
3. `addNum(val1,val2)` is called → **new Function EC** is created (its own 2 phases).
   - Memory: `num1=undefined`, `num2=undefined`, `total=undefined`.
   - Execution: `num1=10`, `num2=5`, `total=15`, `return 15`.
   - This FEC is **deleted** and value returned to `result1`.
4. `addNum(10,2)` → another fresh FEC → returns `12` → deleted.

---

## 5. The Call Stack (LIFO)

The Call Stack manages the order of execution contexts. **L**ast **I**n, **F**irst **O**ut.

```
  push ▲                         ▼ pop
       │                         │
   ┌───┴─────────────┐      ┌────┴────────────┐
   │  addNum() EC    │      │  addNum() EC    │  ← pops when return done
   ├─────────────────┤      ├─────────────────┤
   │  Global EC      │      │  Global EC      │  ← stays until script ends
   └─────────────────┘      └─────────────────┘
       call begins              call returns
```

**Lifecycle for the example above:**

```
1) [ GEC ]                          ← script starts
2) [ GEC, addNum ]                  ← result1 call pushed
3) [ GEC ]                          ← addNum returns 15, popped
4) [ GEC, addNum ]                  ← result2 call pushed
5) [ GEC ]                          ← addNum returns 12, popped
6) [ ]                              ← script ends, GEC popped
```

If functions nest, each pushes on top; the stack unwinds inward-out.

---

## 6. Interview Cheat Sheet

- **JS is single-threaded** → one call stack → one thing at a time.
- **Execution Context** = environment where JS runs; has *Memory* + *Code* components.
- **GEC** is created first and sits at the bottom of the call stack.
- Every **function call** creates a brand-new Function EC (with its own memory).
- **Two phases:** Memory (hoisting) → Execution.
- **Call stack** tracks ECs in **LIFO** order; finished EC is popped.
- **Stack overflow** = call stack exceeds its limit (e.g. infinite/unterminated recursion).
- Hoisting works because of the **Memory Creation Phase** (vars `undefined`, functions fully stored).

### Quick Q&A
- **Q: Why is JS called synchronous single-threaded?**
  One call stack, executes one line at a time in order.
- **Q: What gets stored in memory phase for `var x = 5`?**
  `x = undefined` (value assigned only in execution phase).
- **Q: What causes "Maximum call stack size exceeded"?**
  Too many nested ECs pushed without popping — typically infinite recursion.
