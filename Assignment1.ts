// Assignment-1 Find Even Numbers Using Filter

// let numbers:number[] = [11, 23, -1,-3, 33, 4,6,10,34,-5];

// let evenNumber = numbers.filter((item)=>{
//     if (item % 2 ==0){
//         return item;
        
//     }
// })
// console.log(evenNumber);


// =====================Assignment-2 Array Element * by 2====================

// let numbers: number[]= [2,4,5,7,9,];

// let newNumber = numbers.map((numbers)=>{
// return numbers*2;
// })
// console.log(newNumber);

// ==============================================================================

// =================Assignment-3 Filter Method To Create New Array===============

// const fruits:string[] = ["apple", "banana", "cherry", "date", "grape"];

// const longFruits = fruits.filter(fruit => fruit.length > 5);

// console.log(longFruits);


// =================Assignment-4 Filter Method & Map Method===============

// const numbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenSquares = numbers
//   .filter(number => number % 2 === 0) // Filter even numbers
//   .map(evenNumber => evenNumber ** 2); // Square each even number

// console.log(evenSquares);

// ==========================================================================

// =================Assignment-5 Filter Method & Map Method===============

// const celsiusTemperatures:number[] = [0, 10, 20, 30, 40];

// const fahrenheitTemperatures = celsiusTemperatures.map(celsius => (celsius * 9/5) + 32);

// console.log(fahrenheitTemperatures);


// ========================================================================

// ====Assignment-6 Filter Method & Map Method To Double The Odd Numbers====

// const numbers = [3, 6, 9, 12, 15, 18];

// const doubledOddNumbers = numbers
//   .filter(number => number % 2 !== 0) // Filter odd numbers
//   .map(oddNumber => oddNumber * 2); // Double each odd number

// console.log(doubledOddNumbers);

// =================Assignment-7 Filter Method & Map Method===============


const names = ["Alice", "Bob", "Charlie", "David", "Emily"];

names.forEach(name => {
  console.log(name + "!");
});
