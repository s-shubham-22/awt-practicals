'use strict';

/*
"Implement following features of ECMASCRIPT 6.
•	The let keyword
•	The const keyword
•	Arrow Functions
•	The (Spread Of) ... Operator
•	For/of
•	Map Objects
•	Set Objects
•	Classes
•	Promises
•	Symbol
•	Default Parameters
•	Function Rest Parameter
*/

// The let keyword
let a = 1;
console.log(a);

// The const keyword
const b = 2;
console.log(b);

// Arrow Functions
let sum = (a, b) => a + b;
console.log(sum(1, 2));

// The (Spread Of) ... Operator
let arr = [1, 2, 3];
console.log(...arr);

// For/of
for (let i of arr) {
  console.log(i);
}

// Map Objects
let map = new Map();
map.set('name', 'Nikita Bhatt');
map.set('age', 42);
console.log(map);

// Set Objects
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set);

// Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let person = new Person('Nikita Bhatt', 42);
console.log(person);

// Promises
let promise = new Promise((resolve, reject) => {
  resolve('Success!');
});

promise.then((value) => {
  console.log(value);
});

// Symbol
let symbol = Symbol('symbol');
console.log(symbol);

// Default Parameters
function sum2(a = 1, b = 2) {
  return a + b;
}

console.log(sum2());

// Function Rest Parameter
function sum3(...args) {
  let sum = 0;
  for (let i of args) {
    sum += i;
  }
  return sum;
}

console.log(sum3(1, 2, 3, 4, 5));
