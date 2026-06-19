// if statement
const isUserLoggedIn = true;
if (isUserLoggedIn) {
    console.log("User is logged in");
}
if (!isUserLoggedIn) {
    console.log("User is not logged in");
}   

// <, >, <=, >=, ==, ===, !=, !==

// if-else statement
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


// multiple conditions
const login = true
const emailVerified = true
if (login && emailVerified) {
    console.log("User can access the dashboard");
}   
else if (login && !emailVerified) {
    console.log("Please verify your email to access the dashboard");
}
else {
    console.log("Please login to access the dashboard");
}