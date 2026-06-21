// ---- while loop: checks the condition BEFORE each pass ----
let i = 0;
while (i <= 10){
    console.log(i);
    i = i + 2;   // MUST change the variable, or it loops forever (infinite loop)
}

// while loop over an array
let myArray = [1,2,3,4,5];
let j = 0;
while (j < myArray.length){
    console.log(myArray[j]);
    j++;
}

// ---- do...while loop: runs the body ONCE, THEN checks the condition ----
let score = 4;
do {
    console.log(`score is ${score}`); // runs once even though the check (4 < 5) is true only once
    score++;
} while (score < 5);

/*
  INTERVIEW NOTES:
  - while       -> condition checked first; the body may run 0 times.
  - do...while  -> the body runs at least ONCE, then the condition is checked.
  - Use a for loop when you know the count; use while when you loop until some condition.
  - Always update the loop variable to avoid an infinite loop.
*/
