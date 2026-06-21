# IIFE (Immediately Invoked Function Expression)

**What it is:** A function that runs right away as soon as you write it.

## Key points
- Wrap the function in `( )`, then add `( )` after to call it instantly.
- It makes a new scope so it does not mess with global variables.
- Works with normal functions and arrow functions.
- You can pass values inside the last `( )`.

```js
(function chai() {
  console.log("Hello from IIFE");
})();

(() => {
  console.log("Hello from IIFE arrow function");
})();

((name) => {
  console.log(`Hello ${name} from IIFE arrow function`);
})("Arpit");
```

## Interview Qs
- What is an IIFE?
- Why do we use an IIFE?
- How do you pass a value into an IIFE?
