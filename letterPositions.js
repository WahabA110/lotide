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


const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i ++) {
    if (sentence[i] === ' ') {
      results = results;
    } else if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i]
    }
  }

  return results;
};

console.log(letterPositions('hello'))