{} // These braces are called scope

// let a = 10
// const b = 20
// var c = 30
let a = 500
// let c = 300 // it still shows output 30
    if (true) {
        let a = 10 // it can't get outside the scope 
        const b = 20 // it can't get outside the scope 
        // var c = 30 // var can get outside the scope. That's why we aren't use Var 
        console.log("Inner A :", a)
    }

console.log(a);
// console.log(b);
// console.log(c);


// Nested scopes

function  one () {
    const username = "Arpit"

    function two () {
        const website = "Youtube"
        console.log(username); // here, it prints arpit cz in child function u can access parents variables  
        
    }
    // console.log(website); // error : u can't access outside the scope

    two() // call
}
one() // call


// +++++++++++++++++++++++++++ Example ++++++++++++++++++++++++

function addone (num) {
    return num + 1
}

console.log(addone(5));
 

// another way 

const addTwo = function (num) { // this is also known as expression. 
    return num + 2
}

console.log(addTwo(5));