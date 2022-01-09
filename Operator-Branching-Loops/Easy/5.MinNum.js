//! 5. Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

let num1 = 35,
    num2 = 29,
    num3 = 46;
if (num1 < num2 && num1 < num3) {
    console.log(`${num1} is the minimum number among them.`);
} else if (num2 < num3) {
    console.log(`${num2} is the minimum number among them.`);
} else {
    console.log(`${num3} is the minimum number among them.`);
}