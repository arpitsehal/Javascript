const accountId = 144553
let email = "2005sehalarpit@gmail.com"
var password = "12345"
accountCity =  "Delhi"
let accountState // undefined
// accountId = 2  not allowed because accountId is declared with const
email = "arpit@gmail.com"
password = "54321"
accountCity = "Noida"
console.table([accountId, email, password, accountCity, accountState]); // To print more than one value in a tabular format
/*
    prefer not to use var because of its function scope and hoisting behavior, which can lead to unexpected bugs. Instead, use let for variables that may change and const for variables that should not change.
*/