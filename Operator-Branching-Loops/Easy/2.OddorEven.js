//! 2 . Write a program to take a number input from user and determine whether the number is odd or even.

const readlineSync = require('readline-sync');

let userNum = readlineSync.questionInt("Enter the number here...\n");
if (userNum % 2 === 0) {
    console.log(`Number ${userNum} is an even number`);
} else {
    console.log(`Number ${userNum} is an odd number`);
}