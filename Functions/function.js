function SayMyName() {
    console.log("Arpit");
}

SayMyName(); // output: "Arpit" because we have called the SayMyName function which logs the string "Arpit" to the console. we can also pass parameters to the function to make it more dynamic. for example, if we want to pass a name as a

// Not a good way to return
function addTwoNumbers(a, b) {
//     console.log(a + b);
// }

// addTwoNumbers(5, 10); // output: 15 because we have passed the numbers 5 and 10 as arguments to the addTwoNumbers function which adds them together and logs the result to the console. we can also return the result from the function instead of logging it to the console. for example, if we want to return the sum of two numbers instead of logging it, we can do it like this:

// A better way to return

    // let result = a + b;
    // return result; // we have returned the result from the function instead of logging it to the console. now we can store the result in a variable and use it later in our code. for example, if we want to store the result of adding two numbers in a variable called sum, we can do it like this:

    // Another way to return
    return a + b; // we have returned the result of adding the two numbers together directly from the function without storing it in a variable. this is a more concise way to return the result from the function. it is also more efficient because it does not require the overhead of creating a variable to store the result. therefore, it is recommended to return the result directly from the function in JavaScript.
}

const result = addTwoNumbers(5, 10); // we have called the addTwoNumbers function and stored the result in a variable called sum. now we can use the sum variable to do further calculations or log it to the console. for example, if we want to log the sum variable to the console, we can do it like this:
console.log("Result:", result); // output: 15 because we have logged the sum variable to the console which contains the result of adding the two numbers together. we can also use the sum variable to do further calculations. for example, if we want to multiply the sum variable by 2, we can do it like this:



function loginUserName(username) {

if(username === undefined) {
       console.log("No username provided. Please provide a username to log in.");   
       return // return because we want to exit the function if the username is undefined. this way, we can prevent the function from executing any further code that relies on the username parameter. by returning early, we can also improve the readability of our code and make it clear that the function cannot proceed without a valid username.
    }
    return `${username} just logged in`;
}

// console.log(loginUserName("Arpit")); // output: "Arpit just logged in" because we have called the loginUserName function and passed the string "Arpit" as an argument which is then used to create a new string that says "Arpit just logged in". we can also use template literals to create more complex strings. for example, if we want to include the current date and time in the login message, we can do it like this:

// if someone passed nothing then it shows undefined.

console.log(loginUserName()); // output: "undefined just logged in" because we have called the loginUserName function without passing any arguments which results in the username parameter being undefined. when we try to create the login message using template literals, it will include the string "undefined" instead of a valid username. to avoid this issue, we can provide a default value for the username parameter in the function definition. for example, if we want to set a default username of "Guest", we can do it like this: