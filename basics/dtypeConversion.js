let score = "100";
console.log(typeof score);  // "string"

let scoreNumber = Number(score); // Number() converts a string to a number
console.log(typeof scoreNumber); // "number"

/*
  How Number() converts different values:
  "33"        -> 33
  "33abc"     -> NaN   (NaN = "Not a Number"; but typeof NaN is still "number")
  true        -> 1
  false       -> 0
  null        -> 0
  undefined   -> NaN
  ""          -> 0

  INTERVIEW NOTES:
  - NaN is the only value in JS NOT equal to itself: NaN === NaN is false.
    Check for it with Number.isNaN(x).
  - Number() vs parseInt(): parseInt("33abc") -> 33 (reads digits until it can't),
    but Number("33abc") -> NaN (the whole string must be valid).
  - Quick converts: String(x), Number(x), Boolean(x).
*/
