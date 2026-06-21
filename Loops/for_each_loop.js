const coding = ["HTML", "CSS", "JavaScript", "Python", "Java"];

// forEach runs a callback once for every element. It does NOT return a new array.
coding.forEach(function (value){
    console.log(value);
});

// the same thing with an arrow function
coding.forEach((value) => {
    console.log(value);
});

// you can also pass a named function reference (just name it, don't call it)
function printMe(item){
    console.log(item);
}
coding.forEach(printMe);

// the callback receives (value, index, array)
coding.forEach((value, index, array) => {
    console.log(`value is ${value}, index is ${index}, array is ${array}`);
});

/*
  INTERVIEW NOTES:
  - forEach callback args: (value, index, array).
  - forEach RETURNS undefined (so it can't be chained) — use map if you need a new array.
  - You CANNOT break/continue out of forEach; use a for / for...of loop when you need that.
  - forEach skips empty slots in sparse arrays.
*/
