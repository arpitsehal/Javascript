let myDate = new Date();   // a Date object for the CURRENT date & time
console.log(myDate);

// Converting a date into readable text:
console.log(myDate.toString());           // full date + time + timezone
console.log(myDate.toDateString());       // just the date -> "Wed Jun 19 2024"
console.log(myDate.toTimeString());       // just the time
console.log(myDate.toLocaleString());     // date + time in your locale -> "6/19/2024, 5:30:00 PM"
console.log(myDate.toLocaleDateString()); // local date only
console.log(myDate.toLocaleTimeString()); // local time only

console.log(typeof myDate); // "object" -> a Date is an object, not a primitive

// Creating a SPECIFIC date (careful: the month is 0-indexed, so 0 = January)
let myDateOne = new Date('2024, 0, 19');
console.log(myDateOne);

// Date.now() -> milliseconds elapsed since Jan 1, 1970 UTC (the "Unix epoch")
let myTimeStamp = Date.now();
console.log(myTimeStamp);

// Convert ms -> seconds (divide by 1000, floor to drop the decimals)
console.log(Math.floor(Date.now()/1000));

/*
  INTERVIEW NOTES:
  - Months are 0-indexed (0=Jan, 11=Dec) but the day of the month is 1-indexed. Classic trap!
  - typeof a Date is "object".
  - A timestamp = milliseconds since 1 Jan 1970 UTC (the Unix epoch); Date.now() returns it.
  - Common getters: getFullYear(), getMonth(), getDate(), getDay() (0=Sunday), getHours().
*/
