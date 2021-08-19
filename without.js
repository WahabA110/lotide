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
};


const assertArraysEqual = function (arrVal1, arrVal2) {

  eqArrays(arrVal1, arrVal2) ? (
    console.log(`✅✅✅ Assertion Passed: ${arrVal1} === ${arrVal2}`)
  ) : (
    console.log(`🛑🛑🛑 Assertion Failed: ${arrVal1} !== ${arrVal2}`)
  );
};

const without = function (source, itemsToRemove) {
  let newSource = [];
  for (let i = 0; i < source.length; i ++) {
    let found = false;
    for (let j = 0; j < itemsToRemove.length; j ++) {
      if (source[i] === itemsToRemove[j]) {
        found = true;
      }
    }
    if (!found) {
      newSource.push(source[i]);
    }
  }

  return newSource;
};