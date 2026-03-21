const myArray = [1, 2, 3, 4, 5];
console.log(myArray); // [1, 2, 3, 4, 5]
console.log(myArray[0]); // 1
const myHeroes = ['Superman', 'Batman']

// Array Methods

myArray.push(6) // adds an element to the end of the array
console.log(myArray) // [1, 2, 3, 4, 5, 6]
myArray.pop() // removes the last element of the array
console.log(myArray) // [1, 2, 3, 4, 5]
myArray.unshift(2) // adds an element to the beginning of the array
console.log(myArray) // [2, 1, 2, 3, 4, 5]
myArray.shift() // removes the first element of the array
console.log(myArray) // [1, 2, 3, 4, 5]

const newArray = myArray.join() // joins all the elements of the array into a string
console.log(newArray) // "1,2,3,4,5"

// Slice , Splice

console.log("A ", myArray)
const myArr1 = myArray.slice(1, 3) // [2, 3] - it will return a new array containing the elements from index 1 to index 3 (4 is not included)
console.log(myArr1)

const myArr2 = myArray.splice(1, 3) // [2, 3, 4] - it will remove the elements from index 1 to index 3 (4 is included) and return the removed elements as a new array. it manipulates the original array and changes it.
console.log(myArr2)
console.log("B ", myArray) // [1, 5] - the original array is changed after using splice method.

const marvel = ['Ironman', 'Captain America', 'Thor', 'Hulk']
const dc = ['Superman', 'Batman', 'Wonder Woman']

marvel.push(dc) // it will add dc array to the marvel array
console.log(marvel) // ['Ironman', 'Captain America', 'Thor', 'Hulk', ['Superman', 'Batman', 'Wonder Woman']]
// not a good way to merge

const allHeroes = marvel.concat(dc) // it will merge the two arrays and return a new array
console.log(allHeroes) // ['Ironman', 'Captain America', 'Thor', 'Hulk', 'Superman', 'Batman', 'Wonder Woman']

console.log(Array.isArray("marvel")) // false - it will check if the marvel variable is an array or not
console.log(Array.from("marvel")) // ['m', 'a', 'r', 'v', 'e', 'l'] - it will convert the string "marvel" into an array of characters