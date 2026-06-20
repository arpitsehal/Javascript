const coding = ['JavaScript', 'Python', 'C++', 'Java', 'Ruby'];
const value = coding.forEach( (item) =>{
    console.log(item);
} )
    
console.log(value); // undefined because forEach does not return anything, it just executes the function for each element in the array

// filters 
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter( (num) =>  num > 5 );
console.log(newNums); // [6, 7, 8, 9, 10] because filter returns a new array with elements that satisfy the condition

// real world example of filter method
const books = [
    {title: "Book 1", author: "Author 1", year: 2001 , genre: "Fiction"},
    {title: "Book 2", author: "Author 2", year: 2005, genre: "Non-Fiction"},
    {title: "Book 3", author: "Author 3", year: 2010, genre: "Fiction"},
    {title: "Book 4", author: "Author 4", year: 2015, genre: "Science"}
];
// fiction books
const userBooks = books.filter ( (bk) => bk.genre === "Fiction" );
console.log(userBooks); // [{title: "Book 1", author: "Author 1", year: 2001 , genre: "Fiction"}, {title: "Book 3", author: "Author 3", year: 2010, genre: "Fiction"}] because filter returns a new array with elements that satisfy the condition
// books published after 2005
const userBooks2 = books.filter ( (bk) => {return bk.year >= 2005} );
console.log(userBooks2); // [{title: "Book 2", author: "Author 2", year: 2005, genre: "Non-Fiction"}, {title: "Book 3", author: "Author 3", year: 2010, genre: "Fiction"}, {title: "Book 4", author: "Author 4", year: 2015, genre: "Science"}] because filter returns a new array with elements that satisfy the condition

