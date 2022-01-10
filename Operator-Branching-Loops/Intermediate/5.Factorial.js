//! 5. Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

const readlineSync = require('readline-sync');

let userNum = readlineSync.questionInt("Enter the number to get the Factorial... \n");
let numFactorial = userNum;
for (let index = 1; index < userNum; index++) {
    numFactorial = numFactorial * (userNum - index);
}
console.log(`Factorial of ${userNum} is ${numFactorial}`);