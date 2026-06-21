// Any value placed in a condition is coerced to true (truthy) or false (falsy).
const userEmail = "arpit@gmail.com";

if (userEmail) {                 // a non-empty string is truthy -> this runs
    console.log("You have an email address");
} else {
    console.log("You don't have an email address");
}

/*
  FALSY values (ONLY these are false) — memorize for interviews:
  1. false
  2. 0  and  -0
  3. ""  (empty string)
  4. null
  5. undefined
  6. NaN
  7. 0n  (BigInt zero)

  TRUTHY = everything else, including some tricky ones:
  - "0", "false" (any non-empty string is truthy)
  - [] empty array, {} empty object, function(){}  -> all truthy!
*/

// ---- Nullish Coalescing Operator (??) ----
// Returns the right side ONLY when the left is null or undefined (NOT for 0 or "").
let val1 = 5 ?? 10;          // 5   (5 is not null/undefined)
let val2 = null ?? 10;       // 10
let val3 = undefined ?? 10;  // 10
console.log(val1);
console.log(val2);
console.log(val3);

// ---- Ternary Operator:  condition ? valueIfTrue : valueIfFalse ----
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

/*
  INTERVIEW NOTES:
  - ?? vs || :  0 || 10 -> 10  (|| treats 0 as falsy),
                0 ?? 10 -> 0   (?? only replaces null/undefined).
    Use ?? when 0, "", or false are valid values you want to keep.
  - The ternary is a one-line if/else and it returns a value (so you can assign it).
*/
