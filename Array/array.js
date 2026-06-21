const myArray = [1, 2, 3, 4, 5];
console.log(myArray);     // [1, 2, 3, 4, 5]
console.log(myArray[0]);  // 1  -> arrays are 0-indexed (the first item is index 0)
const myHeroes = ['Superman', 'Batman'];

// ---- Methods that CHANGE the original array (mutating) ----
myArray.push(6);      // add to the END       -> [1,2,3,4,5,6]
console.log(myArray);
myArray.pop();        // remove from the END  -> [1,2,3,4,5]
console.log(myArray);
myArray.unshift(2);   // add to the START     -> [2,1,2,3,4,5]
console.log(myArray);
myArray.shift();      // remove from the START-> [1,2,3,4,5]
console.log(myArray);

// join() -> combines all elements into ONE string (does NOT change the original)
const newArray = myArray.join();
console.log(newArray); // "1,2,3,4,5"

// ---- slice vs splice (very common interview question!) ----
console.log("A ", myArray);

// slice(start, end): COPIES a portion. `end` is NOT included. Original stays the same.
const myArr1 = myArray.slice(1, 3);
console.log(myArr1); // [2, 3]

// splice(start, deleteCount): REMOVES items in place. CHANGES (mutates) the original.
const myArr2 = myArray.splice(1, 3);
console.log(myArr2);         // [2, 3, 4] -> the removed items
console.log("B ", myArray); // [1, 5]    -> original is now modified

// ---- Merging arrays ----
const marvel = ['Ironman', 'Captain America', 'Thor', 'Hulk'];
const dc = ['Superman', 'Batman', 'Wonder Woman'];

marvel.push(dc); // ❌ pushes the WHOLE dc array as a single NESTED element
console.log(marvel); // [..., ['Superman','Batman','Wonder Woman']]

const allHeroes = marvel.concat(dc); // ✅ concat merges into one new flat array
console.log(allHeroes);

console.log(Array.isArray("marvel")); // false -> checks if a value is an array
console.log(Array.from("marvel"));    // ['m','a','r','v','e','l'] -> string to char array

/*
  INTERVIEW NOTES:
  - slice = COPY (safe, returns a new array). splice = CUT (mutates the original).
    Memory trick: spli-CE has a "C" for "Change".
  - Prefer concat or spread to merge: [...marvel, ...dc] (modern way).
  - Mutating methods:      push, pop, shift, unshift, splice, sort, reverse.
  - Non-mutating methods:  slice, concat, map, filter, join.
*/
