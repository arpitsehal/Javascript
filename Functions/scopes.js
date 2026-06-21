{} // a pair of braces creates a "block scope"

let a = 500;

if (true) {
    // `let` and `const` are BLOCK-scoped: they exist only inside these { }.
    let a = 10;    // a separate `a`, lives only in this block (doesn't touch the outer a)
    const b = 20;
    // var c = 30; // `var` would LEAK out of the block (function-scoped) -> why we avoid var
    console.log("Inner A :", a); // 10
}

console.log(a); // 500 -> the outer `a` is unchanged
// console.log(b); // ❌ ReferenceError: b is block-scoped, not visible here

// ---- Nested scope: an inner function can read its outer variables (the closure idea) ----
function one () {
    const username = "Arpit";

    function two () {
        const website = "Youtube";
        console.log(username); // ✅ the child can access the parent's variables
    }
    // console.log(website); // ❌ the parent CANNOT access the child's variables
    two();
}
one();

// ---- Function declaration vs function expression ----
function addone (num) {   // declaration -> hoisted (callable even before this line)
    return num + 1;
}
console.log(addone(5)); // 6

const addTwo = function (num) { // expression -> NOT hoisted (stored in a variable)
    return num + 2;
};
console.log(addTwo(5)); // 7

/*
  INTERVIEW NOTES:
  - Scope = where a variable is accessible. let/const = block scope; var = function scope.
  - Scope chain: inner code can read outer variables, never the other way around.
  - Closure: an inner function "remembers" its outer variables even after the outer
    function has finished — one of the most-asked JS interview topics.
  - Hoisting: function DECLARATIONS are hoisted (usable before definition);
    function EXPRESSIONS / let / const are not (the "temporal dead zone").
*/
