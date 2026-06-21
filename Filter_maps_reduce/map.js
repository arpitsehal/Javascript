const myNum = [1, 2, 3, 4, 5];

// map: returns a NEW array, transforming EVERY item (same length as the original)
const newNum = myNum.map( (num) => num * 2 );
console.log(newNum); // [2, 4, 6, 8, 10]

// Chaining: each method returns a new array, so we can chain map + filter
const newNum2 = myNum
                .map( (num) => num * 10 )    // [10,20,30,40,50]
                .map( (num) => num + 2 )     // [12,22,32,42,52]
                .filter( (num) => num > 20 );// [22,32,42,52]
console.log(newNum2);

/*
  INTERVIEW NOTES:
  - map vs filter: map TRANSFORMS every item (same length);
    filter SELECTS items (length can shrink).
  - map vs forEach: map RETURNS a new array; forEach returns undefined.
  - Chaining is readable, but each step creates a new array (extra passes) —
    for huge datasets a single reduce can do it all in one pass.
*/
