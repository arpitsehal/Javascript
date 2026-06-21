# Numbers & Maths

**What it is:** Working with numbers and the built-in `Math` object.

## Numbers
- Make a number object: `new Number(100)`.
- `.toString()` — number into a string.
- `.toFixed(2)` — keep 2 digits after the dot ("100.00").
- `.toPrecision(3)` — keep 3 total digits.
- `.toLocaleString()` — adds commas; `'en-IN'` uses the Indian system.

```js
const balance = new Number(100)
console.log(balance.toFixed(2))         // 100.00
console.log((23.456789).toPrecision(3)) // 23.5
console.log((100000000).toLocaleString('en-IN')) // 10,00,00,000
```

## Maths
- `Math` is an object with math helpers.
- `Math.PI`, `Math.E` — constants.
- `Math.abs(-5)` → 5 (removes the sign).
- `Math.round(5.6)` → 6.
- `Math.floor(x)` → rounds down.
- `Math.random()` → number between 0 and 1.

```js
// random number between min and max
Math.floor(Math.random() * (max - min + 1)) + min
```

## Interview Qs
- How to fix decimals to 2 places? `.toFixed(2)`.
- How to get a random whole number in a range? `Math.floor(Math.random()*(max-min+1))+min`.
- What does `Math.abs` do? Removes the negative sign.
