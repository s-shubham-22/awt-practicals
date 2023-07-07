'use strict';

/*
Create an array of numbers and perform the following operations:

=> Find the length of the array.
=> Access and display specific elements using indexing.
=> Use array methods like push() ,pop(), shift(), unshift(), 
join(), delete(),concate(),flat(),splice() and slice() to modify the array.

Create an object representing a person with properties like name, age, and 
gender. Implement a function that displays the person's details.
*/

// Create an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Find the length of the array
console.log(numbers.length);

// Access and display specific elements using indexing
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Use array methods
numbers.push(6);
console.log('After push(): ', numbers);

numbers.pop();
console.log('After pop()', numbers);

numbers.shift();
console.log('After shift()', numbers);

numbers.unshift(1);
console.log('After unshift()', numbers);

numbers.join();
console.log('After join()', numbers);

delete numbers[0];
console.log('After delete()', numbers);

numbers = numbers.concat([1, 2, 3]);
console.log('After concat()', numbers);

numbers = numbers.flat();
console.log('After flat()', numbers);

numbers.splice(0, 1);
console.log('After splice()', numbers);

numbers = numbers.slice(0, 1);
console.log('After slice()', numbers);

//Person Name, Image and Gender Details Object
let person = {
  name: 'Nikita Bhatt',
  age: 42,
  gender: 'male'
};

function displayPersonDetails(person) {
  console.log('Name: ', person.name);
  console.log('Age: ', person.age);
  console.log('Gender: ', person.gender);
}

displayPersonDetails(person);
