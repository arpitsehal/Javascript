// ---- Object destructuring: pull properties out into their own variables ----
const course = {
    name: "JavaScript - The Complete Guide 2020 (Beginner + Advanced)",
    price: 9999,
    instructor: "Maximilian Schwarzmüller",
};

// Instead of repeating course.instructor everywhere:
const { instructor } = course; // grab `instructor` by its key name
console.log(instructor); // "Maximilian Schwarzmüller"

// Grab several at once:   const { name, price } = course;
// Rename while pulling:   const { instructor: teacher } = course;  -> then use `teacher`
// Default if missing:     const { rating = 5 } = course;

/*
  INTERVIEW NOTES:
  - Object destructuring matches by KEY NAME (order doesn't matter).
  - Rename:  const { instructor: teacher } = course;
  - Default: const { x = 10 } = obj;  (used when the key is missing/undefined)
  - Super common in React props and function parameters:
        function Card({ title, price }) {...}
  - Arrays destructure by POSITION instead:  const [first, second] = arr;
*/
