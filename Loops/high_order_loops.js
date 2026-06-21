// ---- for...of : loops over the VALUES of an iterable (array, string, Map, Set) ----
const arr = [1,2,3,4,5];
for (const element of arr){
    console.log(element); // each value directly
}

// for...of over a string -> each character
const greetings = "hello";
for (const greet of greetings){
    console.log(`each char is ${greet}`);
}

// for...of over a Map -> destructure each [key, value] pair
const map = new Map();
map.set('IN', "India");
map.set('US', "United States");
for (const [key, value] of map){
    console.log(key, value);
}

// ---- for...in : loops over the KEYS / indexes ----
const programming = ["JavaScript", "Python", "Java", "C++"];
for (const index in programming){
    console.log(programming[index]); // use the key/index to get the value
}

// for...in over an object -> its keys
const obj = {
    name: "John",
    age: 30,
    city: "New York"
};
for (const key in obj){
    console.log(`${key}: ${obj[key]}`);
}

/*
  INTERVIEW NOTES:
  - for...of -> VALUES; works on iterables (arrays, strings, Maps, Sets).
                Does NOT work directly on plain objects (they aren't iterable).
  - for...in -> KEYS/indexes; works on objects (and arrays, but order isn't guaranteed
                and it also walks inherited keys — so avoid for...in on arrays).
  - A Map keeps insertion order and allows any key type; a plain object only has
    string/symbol keys.
*/
