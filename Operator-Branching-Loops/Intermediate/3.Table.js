//! 3. Write a program to take a number input from user and print multiplication table 12 times for that number.

const readlineSync = require('readline-sync');

let userNum = readlineSync.questionInt("Enter the number \n");

for (let index = 1; index <=12; index++) {
    console.log(`${userNum} * ${index} = ${userNum * index} `); 
}

