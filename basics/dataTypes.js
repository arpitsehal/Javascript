// alert("hey") to show alert box but we are using node js not browser so we will use console.log() to print something on console
let name = "Arpit" // string
let age = 19 // number
let isLoggedIn = false //boolean

console.log(typeof name) // to check the data type of a variable
console.log(typeof age)
console.log(typeof isLoggedIn)

// premitive data types in js are string, number, boolean, null, undefined, symbol, BigInt. they are call by value data types because they store the actual value in the variable and when we assign a variable to another variable it creates a copy of the value and assigns it to the new variable. so if we change the value of the new variable it does not affect the original variable.

// non premitive/Reference data types in js are object, array, function. they are call by reference data types because they store the reference of the value in the variable and when we assign a variable to another variable it creates a reference to the value and assigns it to the new variable. so if we change the value of the new variable it also changes the original variable because both variables are pointing to the same value in memory.

//function

const myFunc = function() {
    console.log("This is a function")
}