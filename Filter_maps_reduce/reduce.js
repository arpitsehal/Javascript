const myNums = [ 1, 2, 3 ];

// reduce: boils an array down to a SINGLE value.
// callback(accumulator, currentValue) ; the 2nd arg (0) is the STARTING accumulator.
const myTotal = myNums.reduce(function (acc, curval) {
    return acc + curval;   // acc carries the running total across each item
}, 0);
console.log(myTotal); // 6   (0+1=1, then 1+2=3, then 3+3=6)

// same thing written with an arrow function
const myTotal2 = myNums.reduce( (acc, curval) => acc + curval, 0 );
console.log(myTotal2); // 6

/*
  INTERVIEW NOTES:
  - Signature: arr.reduce((acc, cur) => ..., initialValue).
  - ALWAYS pass an initialValue: with it, reduce on [] safely returns that value;
    without it, reduce on an empty array THROWS a TypeError.
  - Whatever you return becomes the next `acc`.
  - reduce is the most powerful array method — it can re-implement map, filter, sum,
    max, grouping, flattening, etc. (classic example: a shopping-cart total).
*/
