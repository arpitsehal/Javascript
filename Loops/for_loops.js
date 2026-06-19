// for loop

for(let i = 0; i<10;i++){
    console.log(i);
}

// console.log(i); // ReferenceError: i is not defined, because i can't be accessed outside the loop, it is block scoped.


//loop inside a block
for(let i = 0; i<10;i++){
    {
        if(i === 5){
        console.log("i is 5");
    }   
}  
}


// inner and outer loop
for(let i = 0; i<3;i++){
    console.log("Outer loop: " + i);
    for(let j = 0; j<2;j++){
        console.log("Inner loop: " + j);
    }       
}

// loop through an array
let myArray = [1,2,3,4,5]
for (let i = 0; i<myArray.length; i++){
    console.log(myArray[i]);
}   

// Break and continue in loops

for (let i = 0; i<=20;i++){
    if(i === 10){
        break; // break will exit the loop when i is 10
    }
    console.log(`value of i is ${i}`);
}