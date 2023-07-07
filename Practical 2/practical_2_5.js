'use strict';

/*
Implement dynamic imports using the import() function to load 
modules asynchronously based on certain conditions.
*/

let condition = true;

if (condition) {
  import('./practical_2_3/practical_2_3_export.js')
    .then(module => {
      console.log(module.default.add(3, 4))
      console.log(module.default.subtract(3, 4))
      console.log(module.default.multiply(3, 4))
      console.log(module.default.divide(3, 4))
    })
    .catch(error => console.log(error));
} else {
  console.log('Condition is false.');
}