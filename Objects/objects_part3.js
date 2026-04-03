// Object destructuring 

const course    = {
    name: "JavaScript - The Complete Guide 2020 (Beginner + Advanced)",
    price: 9999,
    instructor: "Maximilian Schwarzmüller", 
}

// course.instructor // instead of using like this to extract value from object

const { instructor  } = course; // we can use destructuring to extract value from object. it is a more concise and easier way to extract value from object. it is also more efficient because it does not require the overhead of calling a constructor function. therefore, it is recommended to use destructuring to extract value from object in JavaScript.
console.log(instructor) // output: "Maximilian Schwarzmüller" because we have extracted the value of the instructor property from the course object using destructuring. we can also extract multiple values from the object using destructuring. for example, if we want to extract the name and price properties from the course object, we can do it like this:

