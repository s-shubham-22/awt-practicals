'use strict';

/*
Write a function that calculates the factorial of a given number 
using recursion.

Create a nested function that performs a specific task and invoke 
it within another function.

(NOTE: Implement the concept of variable scope in functions by declaring 
variables with different scopes (global, local) and accessing them).
*/

// Function to calculate factorial of a number using recusrion
function factorial(num) {
  // Check if the number is 0 or 1
  if (num === 0 || num === 1) {
    return 1;
  }

  // Recursively call the function
  return num * factorial(num - 1);
}

// Invoke the function
console.log('Factorial of 5: ', factorial(5)); // 120

// Nested function that performs a specific task
function nestedFunction() {
  // Declare a variable with global scope
  var globalVar = 'Global variable';

  // Declare a variable with local scope
  let localVar = 'Local variable';

  // Print the variables
  console.log('Global variable: ', globalVar);
  console.log('Local variable: ', localVar);
}

// Invoke the nested function within another function
function outerFunction() {
  // Invoke the nested function
  nestedFunction();
}

// Invoke the outer function
outerFunction();
