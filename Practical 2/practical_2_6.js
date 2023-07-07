'use strict';

/*
Create an iterator that generates an infinite sequence of numbers 
and a generator that yields a sequence of even numbers. Use the 
iterator and generator in different scenarios.
*/

function* infiniteSequence() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

let iterator = infiniteSequence();
for (let i = 0; i < 5; i++) {
  console.log(iterator.next().value);
}
