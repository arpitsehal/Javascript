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
