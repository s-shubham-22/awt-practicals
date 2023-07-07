'use strict';

/*
Create a JavaScript module that exports a class representing a 
calculator with methods to perform basic arithmetic operations. 
Import the module in another JavaScript file and use the calculator 
class to perform calculations.
*/

class Calculator {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    return a / b;
  }
}

module.exports = Calculator;