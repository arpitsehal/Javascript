const myNum = [1, 2, 3, 4, 5];
const newNum = myNum.map( (num) => num * 2 );
console.log(newNum); // [2, 4, 6, 8, 10] because map returns a new array with the results of calling a function for every array element

//chaining - we can chain multiple map & filter methods together
const newNum2 = myNum
                .map( (num) => num * 10 )
                .map( (num) => num +2 )
                .filter( (num) => num > 20 );
console.log(newNum2); // [22, 32, 42, 52] because map returns a new array with the results of calling a function for every array element and we can chain multiple map methods together


