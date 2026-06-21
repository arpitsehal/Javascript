const coding = ['JavaScript', 'Python', 'C++', 'Java', 'Ruby'];

// forEach just RUNS a function for each item; it returns undefined (no new array).
const value = coding.forEach( (item) =>{
    console.log(item);
});
console.log(value); // undefined -> forEach never returns data

// ---- filter: returns a NEW array with only the items that pass the test ----
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// keep items where the callback returns true
const newNums = myNums.filter( (num) => num > 5 );
console.log(newNums); // [6, 7, 8, 9, 10]

// Real-world example: filtering an array of objects
const books = [
    {title: "Book 1", author: "Author 1", year: 2001 , genre: "Fiction"},
    {title: "Book 2", author: "Author 2", year: 2005, genre: "Non-Fiction"},
    {title: "Book 3", author: "Author 3", year: 2010, genre: "Fiction"},
    {title: "Book 4", author: "Author 4", year: 2015, genre: "Science"}
];

// only Fiction books
const userBooks = books.filter ( (bk) => bk.genre === "Fiction" );
console.log(userBooks);

// books published in 2005 or later
// NOTE: with { } braces you MUST write `return`, otherwise it returns undefined.
const userBooks2 = books.filter ( (bk) => {return bk.year >= 2005} );
console.log(userBooks2);

/*
  INTERVIEW NOTES:
  - filter returns a NEW array (original unchanged); its length can be smaller.
  - The callback must return a boolean (truthy = keep, falsy = drop).
  - Arrow shorthand:  (x) => x > 5   has an implicit return.
    With braces you need an explicit return:  (x) => { return x > 5 }.
  - forEach returns undefined; filter/map/reduce return values (so they can be chained).
*/
