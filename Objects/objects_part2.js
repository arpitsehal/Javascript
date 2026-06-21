// Two ways to create an object:
// const InstaUser = new Object(); // constructor way (verbose, rarely used)
const InstaUser2 = {}; // object literal -> preferred, concise

// add properties with dot notation
InstaUser2.id = "12345";
InstaUser2.name = "Sehal";
InstaUser2.isLoggedIn = true;

// ---- Nested object: an object inside another object ----
const regularUser = {
    email: "some@example.com",
    fullname: {
        firstname: "Sehal",
        lastname: "Sharma"
    }
};
console.log(regularUser.fullname); // access the nested object
// go deeper: regularUser.fullname.firstname -> "Sehal"

// ---- Merging objects ----
const obj1 = {1 : "one", 2 : "two"};
const obj2 = {3 : "three", 4 : "four"};

// Object.assign(target, ...sources): merge sources into the first (empty) object
const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj);

// Spread syntax: the modern, cleaner way to merge
const mergedObj2 = {...obj1, ...obj2};
console.log(mergedObj2);

// ---- Real-world: data from a database often arrives as an array of objects ----
const user = [
    {userId: 1, name: "Sehal", age: 25},
    {userId: 2, name: "John", age: 30},
    {userId: 3, name: "Jane", age: 28}
];
user[0].name; // access the first object's name -> "Sehal"

// ---- Object utility methods (each returns an ARRAY) ----
console.log(Object.keys(InstaUser2));    // ["id","name","isLoggedIn"]  -> array of keys
console.log(Object.values(InstaUser2));  // ["12345","Sehal",true]      -> array of values
console.log(Object.entries(InstaUser2)); // [["id","12345"], ...]       -> array of [key,value] pairs

/*
  INTERVIEW NOTES:
  - The object literal {} is preferred over new Object().
  - Merge: {...a, ...b}  or  Object.assign({}, a, b). On key clashes, the LAST one wins.
  - Object.keys / values / entries turn an object into arrays you can map/filter/loop.
  - These spread/assign merges are SHALLOW copies (nested objects stay shared/referenced).
*/
