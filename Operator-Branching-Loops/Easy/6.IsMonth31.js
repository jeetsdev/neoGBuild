//! 6. Write program to take a month as an input from the user and find out whether the month has 31 days or not.

const readlineSync = require('readline-sync');

let userMonth = readlineSync.questionInt("Enter the month in integer format...\n");
if (userMonth < 8) {
    if (userMonth % 2 !== 0) {
        console.log(`Month ${userMonth} has 31 days in it.`);
    } else if (userMonth === 2) {
        console.log(`Month ${userMonth} has 28 or 29 days in it.`);
    } else {
        console.log(`Month ${userMonth} has 30 days in it.`);
    }
} else if(userMonth<=12){
    if (userMonth % 2 === 0) {
        console.log(`Month ${userMonth} has 31 days in it.`);
    } else {
        console.log(`Month ${userMonth} has 30 days in it.`);
    }
}
else {
    console.log("Please! Enter valid month.");
}