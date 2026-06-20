const coding = ["HTML", "CSS", "JavaScript", "Python", "Java"]
coding.forEach(function (value){
    console.log(value);
})


// by using arrow function
coding.forEach((value) => {
    console.log(value);
})


function printMe(item){
    console.log(item);
}
coding.forEach(printMe) // we can also pass function name in forEach loop


coding.forEach((value, index, array) => {
    console.log(`value is ${value}, index is ${index}, array is ${array}`);
});