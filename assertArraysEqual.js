const eqArrays = require('./eqArrays')

const assertArraysEqual = function (arrVal1, arrVal2) {

  eqArrays(arrVal1, arrVal2) ? (
    console.log(`✅✅✅ Assertion Passed: ${arrVal1} === ${arrVal2}`)
  ) : (
    console.log(`🛑🛑🛑 Assertion Failed: ${arrVal1} !== ${arrVal2}`)
  );
};

module.exports = assertArraysEqual;