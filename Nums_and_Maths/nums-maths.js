const score = 400
console.log(score)

const balance = new Number(100) // another way to declare number
console.log(balance) // [Number: 100]

console.log(balance.toString()) // 100
console.log(balance.toFixed(2)) // 100.00

const num = 23.456789
console.log(num.toPrecision(3)) // 23.5
const otherNumber = 123.456789
console.log(otherNumber.toPrecision(4)) // 123.5

const hundreds = 100000000
console.log(hundreds.toLocaleString()) // 100,000,000
console.log(hundreds.toLocaleString('en-IN')) // 10,00,00,000 - in indian system we use lakh and crore instead of million and billion


// Maths 

console.log(Math) // [Math: Math] its object which has many properties and methods related to maths
console.log(Math.PI) // 3.141592653589793
console.log(Math.E) // 2.718281828459045
console.log(Math.abs(-5)) // 5
console.log(Math.abs(5)) // 5
console.log(Math.round(5.6)) // 6
console.log(Math.random()) // random number between 0 and 1
console.log(Math.floor(Math.random() * 10)) // random number between 0 and 9
console.log(Math.floor(Math.random() * 10 + 1)) // random number between 1 and 10

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // random number between 10 and 20
