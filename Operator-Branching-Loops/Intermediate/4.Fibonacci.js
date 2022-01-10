//! 4. Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

const readlineSync = require('readline-sync');
const userNum = readlineSync.questionInt("Enter the number to get the Fibonacci series till that number...\n");
let firstTerm = 1;
let secTerm = 1;
let fibonacciSeries = [firstTerm, secTerm];
while (secTerm < userNum) {
    let nextTerm = firstTerm + secTerm;
    if (nextTerm < userNum) {
        fibonacciSeries.push(nextTerm);
    }
    firstTerm = secTerm;
    secTerm = nextTerm;
}
console.log(`Your fibonacci series till ${userNum} is : `)
fibonacciSeries.forEach(element => {
    console.log(element)
}
)