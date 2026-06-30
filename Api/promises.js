// ============================================================
//  JavaScript PROMISES — annotated notes
//  A Promise is an object representing the eventual completion
//  (resolve) or failure (reject) of an asynchronous operation.
//  States: pending -> fulfilled (resolved) | rejected
// ============================================================


// ---------- Promise 1: basic create + consume ----------
// `new Promise` takes an "executor" function that runs immediately.
// It receives two callbacks: resolve (success) and reject (failure).
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task : DB calls, cryptography, network
    setTimeout(function(){
        console.log('async task completed')
        resolve() //this callback is used to connect with .then so that "promise consumed" can be called
    },1000)
})

// `.then` registers the code to run once the promise is resolved (consumed).
promiseOne.then(function(){
    console.log("promise consumed")
})

// ---------- Promise 2: same thing, written inline ----------
// Here we don't store the promise in a variable; we chain .then directly
// onto the `new Promise(...)` expression.
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("async 2 resolved")
})

// ---------- Promise 3: passing data through resolve ----------
// Whatever value you pass to resolve() is received as the argument
// inside .then() — here the resolved user object.
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Arpit", email: "2005sehalarpit@gmail.com"}) // you can even directly pass parameters into resolve()
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user) // `user` is the object passed to resolve()
})

// ---------- Promise 4: resolve + reject + chaining ----------
// Demonstrates the full flow: .then chaining, .catch for errors,
// and .finally which always runs.
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false // if u make it true then u get "ERROR: Something went wrong " in output
        if(!error) {
            resolve({username: "Arpit", password: "123"}) // success path
        } else {
            reject('ERROR: something went wrong') // failure path
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username // value returned here is passed to the NEXT .then
}).then((username) => { // we performed chaining here — receives the returned username
    console.log(username)
}).catch(function(error){ // .catch is used to connect reject callbacks (handles any error above)
    console.log(error);
}).finally(() => {
    console.log("promise is either resolve or rejected")
}) // it is used to check if work is done or not (runs on both success and failure)


// ---------- Promise 5: consuming with async/await ----------
// async/await is a cleaner, synchronous-looking way to consume promises.
// `await` pauses until the promise settles; try/catch replaces .catch.
const promiseFive = new Promise(function(resolve, reject){
   setTimeout(function(){
        let error = false // if u make it true then u get "ERROR: Something went wrong " in output
        if(!error) {
            resolve({username: "Arpit", password: "123"})
        } else {
            reject('ERROR: something went wrong')
        }
    }, 1000)
})

// An async function always returns a promise and lets us use `await` inside.
async function consumePromiseFive(){
 try{
    const response = await promiseFive // wait here until promiseFive resolves
 console.log(response);
 } catch (error){
    console.log(error); // catch handles a rejected promise
 }
}
consumePromiseFive() // call the function to actually run it
