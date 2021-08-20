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

const middle = function (array) {
  let midArray = [];
  if (array.length < 3) {
    return midArray;
  }
  if (array.length % 2 === 0) {
    const firstMid = array[Math.floor((array.length - 1) / 2)];
    const secondMid = array[Math.floor(array.length / 2)];
    midArray.push(firstMid);
    midArray.push(secondMid);
  }
  if (array.length % 2 !== 0) {
    const theMid = array[Math.floor(array.length / 2)];
    midArray.push(theMid);
  }

  return midArray;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);