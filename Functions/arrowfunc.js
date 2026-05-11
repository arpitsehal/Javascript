const user = {
    name: 'John',
    price: 999,

    welcomeMessage: function() {
        console.log(`Welcome ${this.name}!`);
        console.log(this) // this keyword refers to the current object, which is user in this case
    }

}
user.welcomeMessage()
  console.log(this) // this keyword refers to the global object, which is window in browsers and global in Node.js, it is empty object in strict mode.


  const chai = () => {  // this is an arrow function, it doesn't have its own 'this' context, it inherits 'this' from the surrounding scope.
    let username = "Arpit"
    console.log(username); 
  }

   const add = (num1, num2) => {  
    return num1 + num2
   
  }
  console.log(add(5, 10));