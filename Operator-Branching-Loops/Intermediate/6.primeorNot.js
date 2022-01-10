//! 6. Write a Program to take a number input from user and find if the number is Prime or not.

const readlineSync = require('readline-sync');
const userNum = readlineSync.questionInt("Enter the number to find prime or not...\n");
if (userNum%2===0) {
    console.log(`${userNum} is a prime numebr.`)
}
else {
    console.log(`${userNum} is not a prime numebr.`)
}