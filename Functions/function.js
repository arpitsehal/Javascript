// ---- Declaring and calling a function ----
function SayMyName() {
    console.log("Arpit");
}
SayMyName(); // calling the function -> prints "Arpit"

// ---- Returning a value (better than logging inside the function) ----
// Logging just shows the value; RETURNING gives it back so the caller can reuse it.
function addTwoNumbers(a, b) {
    return a + b; // send the result back to wherever the function was called
}
const result = addTwoNumbers(5, 10);
console.log("Result:", result); // 15

// ---- Handling a missing argument ----
function loginUserName(username) {
    // Guard clause: exit early if no username was passed (cleaner than nesting in an if).
    if (username === undefined) {
        console.log("No username provided. Please provide a username to log in.");
        return; // a bare `return` stops the function and gives back undefined
    }
    return `${username} just logged in`;
}
console.log(loginUserName()); // no argument -> guard message, then undefined
// Tip: a default parameter avoids this -> function loginUserName(username = "Guest") {...}

// ---- Rest parameters: collect MANY arguments into one array ----
function calculateCartPrice(...num){
    return num; // `num` is a real array of every argument passed
}
console.log(calculateCartPrice(100, 200, 300)); // [100, 200, 300]

// ---- Passing an object as an argument ----
const user = {
    username: "Arpit",
    price: 999,
};
function handleObject(anyobject) {
    console.log(`Username: ${anyobject.username}, Price: ${anyobject.price}`);
}
handleObject(user); // "Username: Arpit, Price: 999"
// Could also destructure in the params -> function handleObject({ username, price }) {...}

/*
  INTERVIEW NOTES:
  - Parameters = names in the definition; Arguments = real values passed in.
  - return ends the function immediately; any code after it never runs.
  - A function with no return (or a bare `return`) gives back undefined.
  - Rest (...num) GATHERS args into an array (in a definition).
    Spread (...arr) SPREADS an array out (in a call). Same syntax, opposite jobs.
  - Default params: function f(x = 10) {} -> x becomes 10 when the arg is missing/undefined.
*/
