const score = 400; // a normal number literal (the usual way)
console.log(score);

const balance = new Number(100); // Number object wrapper (rarely needed; literals are preferred)
console.log(balance); // [Number: 100]

// ---- Number methods ----
console.log(balance.toString());   // "100"    -> number to string (now .length etc. work)
console.log(balance.toFixed(2));   // "100.00" -> fix to 2 decimal places (great for money)

const num = 23.456789;
console.log(num.toPrecision(3));         // "23.5"  -> 3 significant digits total
const otherNumber = 123.456789;
console.log(otherNumber.toPrecision(4)); // "123.5"

const hundreds = 100000000;
console.log(hundreds.toLocaleString());        // "100,000,000" -> US grouping (default)
console.log(hundreds.toLocaleString('en-IN')); // "10,00,00,000" -> Indian grouping (lakh/crore)

// ---- Math object: built-in math helpers ----
console.log(Math.PI);         // 3.141592653589793
console.log(Math.E);          // 2.718281828459045
console.log(Math.abs(-5));    // 5  -> absolute value (removes the sign)
console.log(Math.round(5.6)); // 6  -> rounds to the nearest integer
console.log(Math.random());   // a random decimal in [0, 1)

console.log(Math.floor(Math.random() * 10));     // 0–9
console.log(Math.floor(Math.random() * 10 + 1)); // 1–10

// ---- Random integer between min and max (inclusive) — common interview question ----
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

/*
  INTERVIEW NOTES:
  - Math.random() returns [0, 1): can be 0, never reaches 1.
  - Random int in [min, max]:  Math.floor(Math.random() * (max - min + 1)) + min.
  - Math.floor (down), Math.ceil (up), Math.round (nearest), Math.trunc (drop decimals).
  - toFixed returns a STRING, not a number (wrap in Number() if you need to do math).
  - Floating point is imprecise: 0.1 + 0.2 === 0.3 is FALSE (it's 0.30000000000000004).
*/
