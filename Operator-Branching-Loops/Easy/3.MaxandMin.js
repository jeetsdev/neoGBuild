//! 3. Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

const readlineSync = require('readline-sync');
let num1 = 129,
    num2 = 251;
if (num1 > num2) {
    console.log(` Max number is : ${num1} and Min number is ${num2}.`);
} else {
    console.log(` Max number is : ${num2} and Min number is ${num1}.`);
}