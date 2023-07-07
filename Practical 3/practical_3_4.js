'use strict';

/*
Convert a Promise-based asynchronous function into an async/await 
style function. For example, rewrite a function that fetches data 
from an API using async/await.

Write a program that utilizes multiple async/await functions to fetch 
data from different APIs sequentially and display the combined results.
*/

const https = require('https');

// Function to fetch data from an API
async function fetchDataFromAPI() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  const response = await fetch(url);
  const json = await response.json();

  console.log('Fetched data:', json);
}

// Invoke the fetchDataFromAPI function
fetchDataFromAPI();
