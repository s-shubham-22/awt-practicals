'use strict';

/*
Use the prototype property to add a new method to an existing object 
constructor, such as Array or String.
*/

String.prototype.reverse = function () {
  return this.split('').reverse().join('');
}

console.log('hello'.reverse()); // olleh
console.log('goodbye'.reverse()); // eybdoog

Array.prototype.first = function () {
  return this[0];
}

console.log([1, 2, 3].first()); // 1
console.log(['a', 'b', 'c'].first()); // a
