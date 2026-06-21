# Date and Time

**What it is:** A built-in object to work with dates and times in JS.

## Key points
- Make a date with `new Date()` (current date/time).
- You can also pass a date string: `new Date('2024, 0, 19')`.
- `typeof` a date is `"object"`.
- Turn a date into text:
  - `.toString()` → full date + time
  - `.toDateString()` → just the date
  - `.toTimeString()` → just the time
- Local (your region) versions:
  - `.toLocaleString()`, `.toLocaleDateString()`, `.toLocaleTimeString()`
- `Date.now()` → milliseconds since Jan 1, 1970 (timestamp).
- For seconds: `Math.floor(Date.now()/1000)`.

```js
let myDate = new Date()
console.log(myDate.toDateString())   // Wed Jun 19 2024
console.log(Date.now())              // milliseconds
console.log(Math.floor(Date.now()/1000)) // seconds
```

## Interview Qs
- **What does `new Date()` give?** → The current date and time.
- **What is `typeof` a date?** → `"object"`.
- **What does `Date.now()` return?** → Milliseconds since Jan 1, 1970.
