# `bind()` in JavaScript — Interview-Ready Notes

---

## 1. What `bind()` Does

`bind()` returns a **brand-new function** whose `this` is **permanently locked** to the value you pass — it does **not** call the function immediately.

```js
const boundFn = someFn.bind(thisArg, arg1, arg2);
// boundFn() will always run with this === thisArg
```

- **Signature:** `fn.bind(thisArg, ...presetArgs)` → new function
- Unlike `call`/`apply`, it **defers execution** — perfect for callbacks/event handlers.

---

## 2. The Problem It Solves — "lost `this`"

`this` is decided by the **call-site** (how a function is invoked), not where it's defined. So when you hand a method to something else to call later, `this` breaks.

```js
class React {
  constructor(){
    this.server = "https://reactjs.org/";
    // ❌ browser will call handleClick with this = the <button>
    document.querySelector('button')
      .addEventListener('click', this.handleClick);        // this.server -> undefined
  }
  handleClick(){ console.log(this.server); }
}
```

When the click fires, the DOM calls `handleClick()` with `this` set to the **button element** (the event target), not the `React` instance → `this.server` is `undefined`.

### The Fix

```js
document.querySelector('button')
  .addEventListener('click', this.handleClick.bind(this));  // ✅ this = React instance
```

`bind(this)` produces a new handler whose `this` is frozen to the instance, so `this.server` resolves correctly.

---

## 3. `call` vs `apply` vs `bind` (side by side)

| Method | Runs now? | Args | Returns |
|--------|-----------|------|---------|
| `call`  | ✅ immediately | individually | the function's result |
| `apply` | ✅ immediately | as an array | the function's result |
| `bind`  | ❌ later | individually (partial application ok) | a **new bound function** |

- **Memory hook:** *call = comma, apply = array, **bind = bind-it-for-later**.*
- `bind` is the only one of the three that **returns a function** instead of running.

---

## 4. Bonus: Partial Application

`bind` can pre-fill (freeze) leading arguments, not just `this`:

```js
function multiply(a, b){ return a * b; }
const double = multiply.bind(null, 2);  // a is fixed to 2
double(5);  // 10
```

---

## 5. Modern Alternatives to `bind`

In modern React/JS you often avoid manual `bind` by using:
- **Arrow functions** — they capture `this` lexically, so a class field arrow method keeps `this`:
  ```js
  handleClick = () => { console.log(this.server); }  // no bind needed
  ```
- **Inline arrow in JSX/handler:** `onClick={() => this.handleClick()}`

Still, understanding `bind` is essential — arrows work *because* they solve the same "lost `this`" problem differently.

---

## 6. Rapid-Fire Interview Q&A

**Q: What does `bind()` return?**
A new function with `this` (and optionally some arguments) permanently set; it does not execute immediately.

**Q: `bind` vs `call`/`apply`?**
`call`/`apply` invoke the function right away; `bind` returns a new function to be called later.

**Q: Why is `this` `undefined`/the button inside an unbound event handler?**
Because `this` depends on the call-site — the DOM invokes the handler as `handler()` with `this` set to the event target, losing the class instance.

**Q: How do you fix lost `this` in a callback?**
`.bind(this)` when registering, or use an arrow function (lexical `this`).

**Q: Can `bind` preset arguments?**
Yes — partial application: `fn.bind(thisArg, arg1)` fixes `arg1`.

**Q: Can you re-bind a bound function?**
No — once bound, `this` can't be changed by another `bind`/`call`/`apply`.

**Q: Do arrow functions need `bind`?**
No — they have no own `this`; they inherit it lexically, so `bind` has no effect on them.

---

## 7. Mental Model / TL;DR

```
- `this` = decided by the CALL-SITE, not the definition.
- Pass a method as a callback  →  it loses `this`.
- bind(thisArg, ...args)  →  NEW function, `this` locked, run LATER.
- call/apply  →  run NOW; bind  →  run LATER.
- Arrow functions  →  lexical `this`, no bind needed (can't be re-bound).
```
