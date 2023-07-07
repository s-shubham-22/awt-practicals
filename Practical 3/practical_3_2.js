'use strict';

/*
Create a program that reads a file asynchronously using callbacks 
and displays its contents.
*/

const fs = require('fs');

// Function to read a file asynchronously
function readFileAsync(path, callback) {
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) {
      console.log(error);
    } else {
      callback(data);
    }
  });
}

// Callback function to be invoked with the file contents
function callback(data) {
  console.log(data);
}

// Invoke the readFileAsync function
readFileAsync('./README.md', callback);
