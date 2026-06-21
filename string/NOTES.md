# Strings

**What it is:** Text data, and ways to work with it.

## Key points
- Template strings: backticks with `${}` to put values inside text.
- Make one with `new String('Sehal')`.
- Get a character by index: `str[0]`.
- `.length` — number of characters.
- `.toUpperCase()` — all capital letters.
- `.charAt(2)` — character at that position.
- `.indexOf('h')` — where a character first appears.
- `.substring(0,4)` — cut a part out (no negatives).
- `.slice(-4,3)` — cut a part out (negatives allowed).
- `.trim()` — remove extra spaces at the ends.
- `.replace('%20','-')` — swap one part for another.

```js
const name = "Arpit"
console.log(`Hello my name is ${name}`)

const lastName = new String('Sehal')
console.log(lastName[0])            // S
console.log(lastName.length)        // 5
console.log(lastName.toUpperCase()) // SEHAL
console.log(lastName.slice(-4,3))   // eh
console.log("  arpit  ".trim())     // arpit
```

## Interview Qs
- How to put a variable in a string? Backticks with `${}`.
- `substring` vs `slice`? `slice` allows negative values.
- How to remove extra spaces? `.trim()`.
