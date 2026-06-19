// here we assume that userEmail is a variable that stores the email address of a user. In JavaScript, an empty string, null, undefined, 0, NaN, and false are considered "falsy" values. Any other value is considered "truthy".

const userEmail = "arpit@gmail.com"

if (userEmail) {
    console.log("You have an email address");
} else {
    console.log("You don't have an email address");
}


// false values 
// 1. false
// 2. 0, -0
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN
// 7. bigint(0n)

//truthy values
// 1. true
// 2. any number other than 0
// 3. any non-empty string
// 4. any object (including arrays and functions)
// 5. "0" (string with a single character "0")
// 6. 'false' , "false"
// 7. [], {}, function(){} (empty array, empty object, and empty function are all truthy values) 


// Nullish Coalescing Operator (??) : null or undefined

let val1 = 5 ?? 10
let val2 = null ?? 10
let val3 = undefined ?? 10
console.log(val1); // Output: 5
console.log(val2); // Output: 10
console.log(val3); // Output: 10

// Terniary Operator (?:) : condition ? exprIfTrue : exprIfFalse

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

