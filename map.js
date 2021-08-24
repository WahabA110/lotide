const assertArraysEqual = function (arrVal1, arrVal2) {

  eqArrays(arrVal1, arrVal2) ? (
    console.log(`✅✅✅ Assertion Passed: ${arrVal1} === ${arrVal2}`)
  ) : (
    console.log(`🛑🛑🛑 Assertion Failed: ${arrVal1} !== ${arrVal2}`)
  );
};

const eqArrays = function (arrVal1, arrVal2) {
  if (arrVal1.length !== arrVal2.length) {
    return false;
  }
  for (let i = 0; i < arrVal1.length; i ++) {
    if (arrVal1[i] !== arrVal2[i]) {
      return false;
    }
  }
  return true;
}



const singleWord = ['ground']
const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(singleWord, word => word[0]);



assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])
assertArraysEqual(results2, ['r', 'o', 'o', 'a', 'o'])
assertArraysEqual(results3, ['g'])
