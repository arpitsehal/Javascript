# JavaScript Promises — Interview Notes

Quick-reference notes based on `promises.js`. Good for last-minute revision.

## 1. What is a Promise?

A **Promise** is an object that represents the eventual result of an asynchronous operation. Instead of nesting callbacks ("callback hell"), promises let you write flatter, chainable async code.

**Three states:**
- `pending` — initial state, not yet finished
- `fulfilled` — operation succeeded (`resolve` was called)
- `rejected` — operation failed (`reject` was called)

A promise can settle only **once** — pending → fulfilled OR pending → rejected.

## 2. Creating a Promise

```js
const p = new Promise(function(resolve, reject){
    // executor — runs immediately, synchronously
    // do async work here, then call resolve() or reject()
});
```

- The **executor** function runs as soon as the promise is created.
- `resolve(value)` → marks it fulfilled and passes `value` forward.
- `reject(error)` → marks it rejected and passes `error` forward.

## 3. Consuming a Promise

### `.then()`
Runs when the promise resolves. Receives whatever was passed to `resolve()`.

```js
promiseThree.then(function(user){
    console.log(user); // value from resolve()
});
```

### `.catch()`
Runs when the promise rejects. Handles errors from anywhere earlier in the chain.

### `.finally()`
Runs **always** — on both success and failure. Good for cleanup (e.g. hide a loading spinner).

## 4. Chaining

Each `.then()` returns a new promise, so you can chain them. A value **returned** from one `.then()` becomes the input to the next.

```js
promiseFour
  .then((user) => {
      return user.username; // passed to next .then
  })
  .then((username) => {
      console.log(username);
  })
  .catch((error) => console.log(error)) // one catch handles the whole chain
  .finally(() => console.log("done"));
```

## 5. async / await

A cleaner, synchronous-looking syntax for consuming promises.

```js
async function consumePromiseFive(){
  try {
    const response = await promiseFive; // pauses until settled
    console.log(response);
  } catch (error) {
    console.log(error); // handles rejection
  }
}
```

- `await` can only be used inside an `async` function.
- An `async` function **always returns a promise**.
- `try/catch` replaces `.catch()` for error handling.

## 6. `.then/.catch` vs `async/await`

| `.then() / .catch()`            | `async / await`                     |
| ------------------------------- | ----------------------------------- |
| Chaining style                  | Looks like synchronous code         |
| Errors via `.catch()`           | Errors via `try/catch`              |
| Can get nested in complex flows | More readable for sequential steps  |

## 7. Common Interview Questions

- **What are the states of a promise?** pending, fulfilled, rejected.
- **Difference between callbacks and promises?** Promises avoid callback hell, are chainable, and have built-in error handling.
- **Can a promise change state twice?** No — it settles only once.
- **What does `.finally()` do?** Runs regardless of success/failure.
- **Does `await` block the whole program?** No — it only pauses the surrounding `async` function; the rest of the program keeps running.
- **`Promise.all` vs `Promise.race`?** `all` waits for every promise (rejects fast if one fails); `race` settles with the first one to finish.

## 8. Key Takeaways

1. Promises model async work with `resolve` / `reject`.
2. Consume with `.then` / `.catch` / `.finally`, or with `async/await`.
3. Returned values flow through a `.then` chain.
4. `async/await` is syntactic sugar over promises — same engine underneath.
