# Asynchronous JavaScript

**Big idea:** JavaScript is **single-threaded** — it has ONE call stack and runs one thing at a time (synchronous by default). So how does it handle timers, network calls, and user events without freezing? Answer: the **browser** (not JS itself) provides extra APIs + an **event loop** that lets slow tasks run "in the background" and come back later. That's *asynchronous* JS.

---

## Synchronous vs Asynchronous

- **Synchronous (sync):** code runs **line by line, top to bottom**. Each line waits for the previous one to finish. This is **blocking**.
- **Asynchronous (async):** a slow task (timer, fetch, file read) is started, JS moves on to the next line, and the result is handled **later** when ready. This is **non-blocking**.

```js
console.log("1");
console.log("2");   // sync -> prints 1, 2, 3 in order
console.log("3");
```

---

## The JS Engine: Execution Context & Call Stack

- **Execution Context** = the environment where code runs. There's one **Global Execution Context (GEC)** and a new one for every function call.
- **Call Stack** = a LIFO (Last In, First Out) stack. A function call is **pushed** on; when it returns it's **popped** off.
- JS runs whatever is on top of the call stack. The stack must be **empty** before async callbacks can run.

```
push main()  ->  push first()  ->  push second()
                                    pop  second()
                     pop  first()
pop  main()  -> stack empty
```

---

## How async actually works (the players)

| Piece | Who provides it | Job |
|---|---|---|
| **Call Stack** | JS engine | Runs code, one frame at a time |
| **Web APIs** | Browser (not JS) | `setTimeout`, `fetch`, DOM events, etc. run here "in the background" |
| **Callback / Task Queue** | Browser | Holds callbacks that are *ready* to run (e.g. timer finished) |
| **Microtask Queue** | Browser | Holds Promise callbacks (`.then`, `await`) — **higher priority** |
| **Event Loop** | Browser | Keeps checking: *"Is the call stack empty? If yes, push the next queued callback onto it."* |

> **Key rule:** A callback only runs when the **call stack is empty**. The event loop always drains the **microtask queue first**, then the **task (callback) queue**.

---

## `setTimeout` — run code later

`setTimeout(callback, delayInMs)` — runs the callback **after at least** `delay` ms (not exactly — it waits for the stack to be free).

```js
console.log("start");

setTimeout(() => {
  console.log("inside timeout");   // runs LAST, even with 0 ms
}, 2000);

console.log("end");

// Output:  start  ->  end  ->  inside timeout
```

> Even `setTimeout(fn, 0)` runs **after** all synchronous code, because it must wait for the call stack to empty.

### Cancel a timeout
```js
const id = setTimeout(() => console.log("won't run"), 3000);
clearTimeout(id);   // cancels it
```

---

## `setInterval` — run code repeatedly

`setInterval(callback, delayInMs)` — runs the callback **again and again** every `delay` ms until you stop it.

```js
const id = setInterval(() => {
  console.log("tick every 1s");
}, 1000);

// stop it later
setTimeout(() => clearInterval(id), 5000);  // stops after ~5 ticks
```

> Always keep the id so you can `clearInterval(id)` — otherwise it runs forever.

---

## Why callbacks fire in a surprising order (walkthrough)

```js
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
```
1. `console.log("A")` → prints **A** (sync).
2. `setTimeout(..., 0)` → handed to **Web API**, callback parked in the **task queue**. JS does NOT wait.
3. `console.log("C")` → prints **C** (sync).
4. Call stack now empty → event loop pushes the timeout callback → prints **B**.

**Output: A, C, B.**

---

## Interview Q&A

- **Is JavaScript single-threaded or multi-threaded?** → Single-threaded — one call stack, runs one statement at a time.
- **Then how does it do async work?** → The **browser** provides Web APIs + queues, and the **event loop** pushes finished callbacks back onto the stack when it's empty. JS itself stays single-threaded.
- **Sync vs async?** → Sync = blocking, runs line by line; async = non-blocking, slow tasks finish later via callbacks.
- **What is the call stack?** → A LIFO structure tracking function calls; current code runs on top, returns pop off.
- **What is the event loop?** → A loop that checks if the call stack is empty and, if so, moves the next queued callback onto it.
- **Why does `setTimeout(fn, 0)` not run immediately?** → It's sent to the Web API and its callback waits in the task queue until ALL sync code finishes and the stack is empty.
- **`setTimeout` vs `setInterval`?** → `setTimeout` runs the callback once after a delay; `setInterval` runs it repeatedly every delay until `clearInterval`.
- **How do you cancel timers?** → `clearTimeout(id)` / `clearInterval(id)` using the id returned when you created them.
- **Task queue vs microtask queue?** → Microtasks (Promise `.then`/`await`) have higher priority and are drained fully before the next task (callback like `setTimeout`) runs.

---

## Cheat-sheet
- JS = single-threaded + synchronous by default → blocking.
- Async = browser Web APIs + queues + event loop → non-blocking.
- Callback runs only when the **call stack is empty**.
- `setTimeout(fn, ms)` = once; `setInterval(fn, ms)` = repeat. Save the id to cancel.
- Order: all sync code → microtasks (Promises) → tasks (setTimeout/setInterval).
