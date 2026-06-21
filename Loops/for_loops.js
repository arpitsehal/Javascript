// ---- Basic for loop:  init ; condition ; step ----
for(let i = 0; i < 10; i++){   // i=0 start, run while i<10, do i++ after each pass
    console.log(i);
}
// console.log(i); // ❌ ReferenceError: `let i` is block-scoped to the loop

// Loop with a condition inside
for(let i = 0; i < 10; i++){
    if(i === 5){
        console.log("i is 5");
    }
}

// ---- Nested loops (the outer runs once, the inner runs fully each time) ----
for(let i = 0; i < 3; i++){
    console.log("Outer loop: " + i);
    for(let j = 0; j < 2; j++){
        console.log("Inner loop: " + j);
    }
}

// ---- Looping over an array by index ----
let myArray = [1,2,3,4,5];
for (let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}

// ---- break and continue ----
for (let i = 0; i <= 20; i++){
    if(i === 10){
        break;       // break -> exit the loop completely
    }
    console.log(`value of i is ${i}`);
}

/*
  INTERVIEW NOTES:
  - break    -> stops the entire loop.
  - continue -> skips the current iteration and jumps to the next one.
  - `let i` is block-scoped (a fresh i per iteration); `var i` would leak and be shared —
    the classic setTimeout-inside-a-loop bug.
  - Nested loops multiply the work: outer n × inner m = O(n*m) time complexity.
*/
