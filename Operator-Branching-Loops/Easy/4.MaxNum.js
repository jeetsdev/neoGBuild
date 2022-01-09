//! 4. Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

let num1 = 8,
    num2 = 23,
    num3 = 17;
if (num1>num2&&num1>num3) {
    console.log(`${num1} is the maximux number.`);
}
else if (num2 > num3) {
    console.log(`${num2} is the maximux number.`);
}
else {
    console.log(`${num3} is the maximux number.`);
}