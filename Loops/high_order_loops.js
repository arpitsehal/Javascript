// for of loop - array 

const arr = [1,2,3,4,5]
for (const element of arr){
    console.log(element);
}

// for of loop - string
const greetings = "hello"
for (const greet of greetings){
    console.log(`each char is ${greet}`);
}

// for of loop - maps

const map = new Map()
map.set('IN', "India")
map.set('US', "United States")

for (const [key, value] of map){
    console.log(key, value);
}

//for of loop directly puts values but for in loop puts keys and we have to access values using keys

// for in loop
const programming = ["JavaScript", "Python", "Java", "C++"]
for (const index in programming){
    console.log(programming[index]); // if we only use programming then it will print index of the array
}
// for in loop - object

const obj = {
    name: "John",
    age: 30,
    city: "New York"
}   
for (const key in obj){
    console.log(`${key}: ${obj[key]}`);
}