// reduce in function

const myNums = [ 1,2,3]

const myTotal =myNums.reduce(function (acc, curval) {
    return acc + curval;
}, 0) // 0 is the initial value of the accumulator

console.log(myTotal); // 6 because reduce method executes a reducer function on each element of the array, resulting in a single output value. The reducer function takes two arguments: the accumulator and the current value. The initial value of the accumulator is provided as the second argument to the reduce method (in this case, 0). The reducer function is called for each element in the array, and the result is stored in the accumulator, which is returned at the end of the reduce method.

// reduce with arrow function
const myTotal2 = myNums.reduce( (acc, curval) => acc + curval, 0 );
console.log(myTotal2); // 6 because reduce method executes a reducer function on each element of the array, resulting in a single output value. The reducer function takes two arguments: the accumulator and the current value. The initial value of the accumulator is provided as the second argument to the reduce method (in this case, 0). The reducer function is called for each element in the array, and the result is stored in the accumulator, which is returned at the end of the reduce method.