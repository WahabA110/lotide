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

const takeUntil = function(array, callback) {
  let arr = [];
  let i = 0;
  while (i < array.length) {
    if (callback(array[i])) {
      break;
    }
    arr.push(array[i]);
    i++;
  }
  return arr;
};



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

console.log(takeUntil(data2, x => x === ','))
console.log(takeUntil(data1, x => x < 0))

assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ])
assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ])