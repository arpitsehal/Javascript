const name = "Arpit"
const age = 20

// console.log(name + age); old way to write 

console.log(`Hello my name iis ${name} and my age is ${age}`) // this is how we print strings now days

const lastName = new String('Sehal') // another way to declare string 
console.log(lastName[0]) // output = S , as it stored in 0th position
console.log(lastName.length) // 5 
console.log(lastName.toUpperCase()); // SEHAL
console.log(lastName.charAt(2)); // h
console.log(lastName.indexOf('h')); // 2

// slicing
const newName = lastName.substring(0,4)
console.log(newName); // Seha

const sliceName = lastName.slice(-4,3) // in slice we can use -ve values too
console.log(sliceName); // eh - reverse string
const newNameOne = ("    arpit    ")
console.log(newNameOne);
console.log(newNameOne.trim()); // it will remove extra space from string

// replace

const url = "https://arpit.com/arpit%20sehal"
console.log(url.replace('%20','-')) //https://arpit.com/arpit-sehal
