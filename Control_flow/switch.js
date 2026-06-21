// switch compares ONE value against multiple `case`s using strict equality (===).
// Syntax:
// switch (expression) {
//     case value1:
//         // runs if expression === value1
//         break;            // stop here and exit the switch
//     default:
//         // runs if no case matched
// }

const month = 3;

switch(month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");   // this runs (month === 3)
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    default:                    // runs when no case matches
        console.log("Invalid month");
}

/*
  INTERVIEW NOTES:
  - Without `break`, execution "falls through" into the next case(s) — a classic bug.
  - Intentional fall-through (stacking several cases together) is sometimes used on purpose.
  - switch uses === (strict), so "3" would NOT match case 3.
  - Use switch for many fixed values; use if/else for ranges or complex conditions.
*/
