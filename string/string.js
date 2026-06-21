const name = "Arpit";
const age = 20;

// Old way to combine text: name + age. Modern way = template literals (backticks + ${ }):
console.log(`Hello my name is ${name} and my age is ${age}`);

const lastName = new String('Sehal'); // String object wrapper (literals are usually preferred)

console.log(lastName[0]);            // "S"     -> strings are indexed like arrays (0-based)
console.log(lastName.length);        // 5       -> number of characters
console.log(lastName.toUpperCase()); // "SEHAL"
console.log(lastName.charAt(2));     // "h"     -> character at index 2
console.log(lastName.indexOf('h'));  // 2       -> first index of 'h' (-1 if not found)

// ---- Extracting parts of a string ----
const newName = lastName.substring(0, 4); // "Seha" -> from index 0 up to (not including) 4
console.log(newName);

const sliceName = lastName.slice(-4, 3);  // "eh" -> slice accepts NEGATIVE indexes (counts from the end)
console.log(sliceName);

const newNameOne = ("    arpit    ");
console.log(newNameOne);
console.log(newNameOne.trim()); // "arpit" -> removes whitespace from both ends

// ---- replace ----
const url = "https://arpit.com/arpit%20sehal";
console.log(url.replace('%20', '-')); // "https://arpit.com/arpit-sehal"

/*
  INTERVIEW NOTES:
  - Strings are IMMUTABLE: methods return a NEW string, they never change the original.
  - substring vs slice: slice accepts negative indexes (count from the end); substring
    treats negatives as 0 and swaps the args if start > end.
  - replace() only changes the FIRST match; use replaceAll() or a /regex/g for all matches.
  - Template literals (`${}`) also allow multi-line strings and expressions inside.
*/
