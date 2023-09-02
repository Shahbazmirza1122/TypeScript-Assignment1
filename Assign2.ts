function sumOfFirstNEvens(n: number): number {
    let sum: number = 0;
    for (let i: number = 1; i <= n; i++) {
      // Calculate the current even number (2 * i)
      const evenNumber: number = 2 * i;
  
      // Add the current even number to the sum
      sum += evenNumber;
    }
    return sum;
  }
  
  const n: number = 5; // Change n to the desired number of even numbers
  const result: number = sumOfFirstNEvens(n);
  console.log(`The sum of the first ${n} even numbers is ${result}`);
  
//   ==========================================================================


function printEvenNumbers(numbers: number[]) {
    for (let i: number = 0; i < numbers.length; i++) {
      const currentNumber: number = numbers[i];
      if (currentNumber % 2 === 0) {
        console.log(currentNumber);
      }
    }
  }
  
  const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Replace with your array of numbers
  console.log("Even numbers in the array:");
  printEvenNumbers(numberArray);
  
// ======================================================================================

function removeEvenNumbers(numbers: number[]): number[] {
    const oddNumbers: number[] = [];
    for (let i: number = 0; i < numbers.length; i++) {
      const currentNumber: number = numbers[i];
      if (currentNumber % 2 !== 0) {
        oddNumbers.push(currentNumber);
      }
    }
    return oddNumbers;
  }
  
  const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Replace with your array of numbers
  const oddNumbersArray: number[] = removeEvenNumbers(numberArray);
  
  console.log("Odd numbers in the array:");
  console.log(oddNumbersArray);
  

// =================================================================================================

function calculateCircleArea(radius: number): number {
    const pi: number = 3.14159;
    const area: number = pi * Math.pow(radius, 2);
    return area;
  }
  
  const radius: number = 5; // Replace with the desired radius
  const area: number = calculateCircleArea(radius);
  
  console.log(`The area of the circle with radius ${radius} is ${area}`);
  


// ====================================================================================================


function removeFailingGrades(grades: number[]): number[] {
    const failingGradeThreshold: number = 50;
    const indicesToRemove: number[] = [];
  
    for (let i: number = 0; i < grades.length; i++) {
      if (grades[i] < failingGradeThreshold) {
        // Add the index of the failing grade to the indicesToRemove array
        indicesToRemove.push(i);
      }
    }
  
    // Remove failing grades using splice
    for (let i: number = indicesToRemove.length - 1; i >= 0; i--) {
      const indexToRemove: number = indicesToRemove[i];
      grades.splice(indexToRemove, 1);
    }
  
    return grades;
  }
  
  const grades: number[] = [85, 42, 65, 30, 90, 55, 75, 40]; // Replace with your list of grades
  const updatedGrades: number[] = removeFailingGrades(grades);
  
  console.log("Updated grades (failing grades removed):");
  console.log(updatedGrades);
  