'use strict';

/*
Create a JavaScript module that fetches data from an API using 
the fetch() function and exports the retrieved data.

API: https://jsonplaceholder.typicode.com/users
*/

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
