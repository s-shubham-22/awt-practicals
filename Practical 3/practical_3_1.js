'use strict';

/*
Write a program that demonstrates asynchronous behavior using a 
callback function. For example, create a function that simulates 
fetching data from an API and invokes a callback with the fetched data.

API: https://jsonplaceholder.typicode.com/todos/1
*/

// Function to simulate fetching data from an API
function fetchData(callback) {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => callback(json));
}

// Callback function to be invoked with the fetched data
function callback(data) {
  console.log(data);
}

// Invoke the fetchData function
fetchData(callback);
