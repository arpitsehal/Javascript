// ---- Variable declarations: const, let, var ----

const accountId = 144553;                 // const -> value is FIXED, cannot be reassigned
let email = "2005sehalarpit@gmail.com";   // let  -> value CAN change later
var password = "12345";                   // var  -> old way, AVOID (function scope + hoisting bugs)
accountCity = "Delhi";                    // no keyword -> creates a global implicitly (bad, fails in strict mode)
let accountState;                         // declared with no value -> automatically `undefined`

// accountId = 2;  // ❌ TypeError: Assignment to constant variable
email = "arpit@gmail.com";                // ✅ let can be reassigned
password = "54321";                       // var can be reassigned too
accountCity = "Noida";

// console.table prints multiple values as a neat table (handy for debugging)
console.table([accountId, email, password, accountCity, accountState]);

/*
  INTERVIEW NOTES:
  - const -> block-scoped, cannot be REASSIGNED (but an object's contents CAN still change).
  - let   -> block-scoped, can be reassigned.
  - var   -> function-scoped, hoisted as `undefined`; avoid it to dodge surprise bugs.
  - Rule of thumb: use `const` by default, `let` only when the value must change, never `var`.
  - A variable declared without a value holds `undefined`.
*/
