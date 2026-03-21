let myDate = new Date()
console.log(myDate)

console.log(myDate.toString()) // Wed Jun 19 2024 17:30:00 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) // Wed Jun 19 2024
console.log(myDate.toTimeString()) // 17:30:00 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()) // 6/19/2024, 5:30:00 PM
console.log(myDate.toLocaleDateString()) // 6/19/2024
console.log(myDate.toLocaleTimeString()) // 5:30:00 PM

console.log(typeof myDate) // object

let myDateOne = new Date('2024, 0, 19')
console.log(myDateOne) // Sat Jan 19 2024 00:00:00 GMT+0530 (India Standard Time)

let myTimeStamp = Date.now()
console.log(myTimeStamp) // 1718785800000 - it will give us the number of milliseconds since January 1, 1970, 00:00:00 UTC. This is also known as the Unix timestamp or epoch time.

console.log(Math.floor(Date.now()/1000)) // 1718785800 - it will give us the number of seconds since January 1, 1970, 00:00:00 UTC. This is also known as the Unix timestamp or epoch time in seconds.