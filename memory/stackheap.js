// stack - premitive memory allocation, it is used to store premitive data types and function calls. it is faster than heap because it is stored in a contiguous block of memory and it is managed by the system. it is also called call stack because it is used to manage function calls and it follows the LIFO (Last In First Out) principle.

// heap - non premitive memory allocation, it is used to store non premitive data types and it is slower than stack because it is stored in a non contiguous block of memory and it is managed by the programmer. it is also called free store because it is used to store dynamic memory allocation and it does not follow any specific order.

let name = "Arpit" // string - stored in stack
let anotherName = name // string - stored in stack
anotherName = "Sehal" // string - stored in stack
// as here only copied value of name is assigned to anotherName and when we change the value of anotherName it does not affect the value of name because both variables are stored in different memory locations in stack. so this is called call by value.
console.log(name) // Arpit
console.log(anotherName) // Sehal

let user1 = {
    email : "arpit@gmail.com"
} // object - stored in heap
let user2 = user1 // object - stored in heap
user2.email = "sehal@gmail.com" // changing the value of user2.email will also change user1.email because both variables point to the same object in heap memory.
console.log(user1.email) 
console.log(user2.email) 