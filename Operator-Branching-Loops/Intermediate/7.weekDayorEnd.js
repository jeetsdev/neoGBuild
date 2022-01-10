//! 7. Write a program to take a day as an input and determine whether it is a weekday or weekend.Example: Tuesday is weekday.
const readlineSync = require('readline-sync');
const allWeekEnds = ["saturday","sunday"];

const userDay = (readlineSync.question("Enter the day name...\n").toLowerCase());

if (allWeekEnds.includes(userDay)) {
    console.log(`${userDay} is a weekend.`);
}
else {
    console.log(`${userDay} is not a weekend.`);
}

