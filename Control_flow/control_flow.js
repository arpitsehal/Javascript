// ---- if statement ----
const isUserLoggedIn = true;
if (isUserLoggedIn) {            // runs the block only when the condition is truthy
    console.log("User is logged in");
}
if (!isUserLoggedIn) {          // ! flips the boolean (NOT operator)
    console.log("User is not logged in");
}

// Comparison operators: <, >, <=, >=, ==, ===, !=, !==

// ---- if / else if / else: picks ONE block to run ----
let temprature = 30;
if (temprature < 41){
    console.log("It's a hot day");
}
else if (temprature > 30){
    console.log("It's a nice day");
}
else{
    console.log("It's a cold day");
}

// ---- Combining conditions with logical operators ----
const login = true;
const emailVerified = true;
if (login && emailVerified) {            // && = AND (both must be true)
    console.log("User can access the dashboard");
}
else if (login && !emailVerified) {
    console.log("Please verify your email to access the dashboard");
}
else {
    console.log("Please login to access the dashboard");
}

/*
  INTERVIEW NOTES:
  - == (loose) compares VALUE only and converts types: 5 == "5" -> true.
  - === (strict) compares VALUE *and* TYPE: 5 === "5" -> false. Prefer === always.
  - && (AND) -> true only if both sides are true.  || (OR) -> true if either is true.
  - Short-circuit: A && B stops at A if A is falsy; A || B stops at A if A is truthy.
*/
