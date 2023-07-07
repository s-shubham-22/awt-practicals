'use strict';
const Calculator = require('./practical_2_3_export.js');

/*
Create a JavaScript module that exports a class representing a 
calculator with methods to perform basic arithmetic operations. 
Import the module in another JavaScript file and use the calculator 
class to perform calculations.
*/

console.log(Calculator.add(4, 3));
console.log(Calculator.subtract(4, 3));
console.log(Calculator.multiply(4, 3));
console.log(Calculator.divide(4, 3));
