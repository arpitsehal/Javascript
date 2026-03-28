// const InstaUser = new Object() // singleton object created using the Object constructor. It is an empty object.
// console.log(InstaUser) // output: {} because it is an empty object.
const InstaUser2 = {} // object literal. It is also an empty object. It is a more common way to create objects in JavaScript. both of them are the same and they are used to create objects in JavaScript. The object literal is more concise and easier to read than the Object constructor. It is also more efficient because it does not require the overhead of calling a constructor function. Therefore, it is recommended to use the object literal syntax to create objects in JavaScript.
// console.log(InstaUser2) // output: {} because it is an empty object.

InstaUser2.id = "12345" // adding a property to the object using dot notation.
InstaUser2.name = "Sehal" // adding a property to the object using dot notation.
InstaUser2.isLoggedIn = true // adding a property to the object using dot notation.

const regularUser = { 
    email: "some@example.com",
    fullname: { // nested object = an object inside another object.
        firstname: "Sehal",
        lastname: "Sharma"
    }
}   

console.log(regularUser.fullname);

// merging objects using assign method. we can't use this method to merge more than two objects. it only merges two objects at a time. if we want to merge more than two objects, we can use the spread operator.

const obj1 = {1 : "one", 2 : "two"}
const obj2 = {3 : "three", 4 : "four"}
const mergedObj = Object.assign({}, obj1, obj2)
console.log(mergedObj)

// merging using spread operator. it is a more modern way to merge objects in JavaScript. it is also more concise and easier to read than the Object.assign() method. it can merge more than two objects at a time.
const mergedObj2 = {...obj1, ...obj2}
console.log(mergedObj2)



// when object comes from database.
const user = [
    {userId: 1, name: "Sehal", age: 25},
    {userId: 2, name: "John", age: 30},
    {userId: 3, name: "Jane", age: 28}  
]

user[0].name // to access the property of the first object in the array. it will return "Sehal". we can also use dot notation to access the properties of the objects in the array. we can also use bracket notation to access the properties of the objects in the array. it is a good practice to use bracket notation when the property name is stored in a variable. for example, if we want to access the name property of the first object in the array, we can do it like this:

console.log(Object.keys(InstaUser2)); // it stores value in an array and it returns an array of the keys of the object. it is a good practice to use this method to get the keys of an object because it is more efficient than using a for...in loop to iterate over the properties of the object. it also returns only the own properties of the object and it does not return the inherited properties of the object.
console.log(Object.values(InstaUser2)); // it stores value in an array and it returns an array of the values of the object. it is a good practice to use this method to get the values of an object because it is more efficient than using a for...in loop to iterate over the properties of the object. it also returns only the own properties of the object and it does not return the inherited properties of the object.
console.log(Object.entries(InstaUser2)); // it stores value in an array and it returns an array of the key-value pairs of the object. it is a good practice to use this method to get the key-value pairs of an object because it is more efficient than using a for...in loop to iterate over the properties of the object. it also returns only the own properties of the object and it does not return the inherited properties of the object.