"use strict";
// function sumOfFirstNEvens(n: number): number {
//     let sum: number = 0;
//     for (let i: number = 1; i <= n; i++) {
//       // Calculate the current even number (2 * i)
//       const evenNumber: number = 2 * i;
//       // Add the current even number to the sum
//       sum += evenNumber;
//     }
//     return sum;
//   }
//   const n: number = 5; // Change n to the desired number of even numbers
//   const result: number = sumOfFirstNEvens(n);
//   console.log(`The sum of the first ${n} even numbers is ${result}`);
//   ==========================================================================
function printEvenNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];
        if (currentNumber % 2 === 0) {
            console.log(currentNumber);
        }
    }
}
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Replace with your array of numbers
console.log("Even numbers in the array:");
printEvenNumbers(numberArray);
