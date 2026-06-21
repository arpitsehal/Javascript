let value = 3;
let negValue = (-value);   // unary minus flips the sign
console.log(value);        // 3
console.log(negValue);     // -3

let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2); // "Hello World" -> + joins (concatenates) strings

/*
  INTERVIEW NOTES — the + operator is overloaded:
  - number + number  -> addition:        2 + 3   -> 5
  - string + anything -> concatenation:  "2" + 3 -> "23"   (3 becomes "3")
  - 1 + "2" -> "12", but 1 - "2" -> -1
    (only + does string concat; -, *, / always force numbers)
  - "5" * "2" -> 10  (other math operators convert strings to numbers)
*/
