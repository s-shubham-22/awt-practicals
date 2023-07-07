'use strict';

/*
Write a program that uses Promises to handle asynchronous operations. 
For example, create a function that returns a Promise to fetch data 
from an API and resolve it with the fetched data.

Implement error handling using Promises by rejecting a Promise with 
an error message in case of failure.
*/

const https = require('https');

function fetchDataFromAPI() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error));
  });
}

// Usage example
fetchDataFromAPI()
  .then((data) => {
    console.log('Fetched data:', data);
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });

