# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @wahab110/lotide`

**Require it:**

`const _ = require('@wahab110/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns the first element in an array.
* `middle`: returns the middle most elements of an array above a length of 2. If array length is even it returns both sides of the middle.
* `tail`: returns everything but the first item in an array.
* `assertEqual`: compares 2 primitive data types together and console logs whether or not they match.
* `assertArraysEqual`: similar to eqArrays, however this will log to the console whether they match or not, rather than returning true or false.
* `countLetters`: takes in a sentence as a string and returns a count of each letter within that sentence.
* `countOnly`: is given an array and object as arguments. Returns a new object containing the count of everything in the array that the object argument listed.
* `eqArrays`: takes in two arrays and returns true or false if they are the same.
* `findKeyByValue`: takes in an object and value. Returns the first key which contains the given value, and if no key with the given value is found it returns undefined.
* `letterPositions`: returns all the indices in the string argument where each character is found.
* `without`: intakes two arrays as arguments. Second array informs which elements from the first array you no longer want, and returns the remainder as a new array.
* `assertObjectsEqual`: similar to eqObjects, but logs a statement stating whether they match or not rather than returning true or false.
* `eqObjects`: takes in two objects as arguments. Returns true or false depending on whether they're the same or not.
* `findKey`: takes in an object and a callback function. Will return the first key for which the callback function returns a truthy value and if no key is found then it returns undefined.
* `map`: takes in an array to map and a callback function. Will return a new array based on the results of the callback function.
* `takeUntil`: takes in an array to work with and a callback function. Loops through the array and returns the values as a singular array until the callback function is truthy.