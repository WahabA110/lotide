const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let lettersCounted = {};
  for (let letters of sentence) {
    if (letters === ' ') {
      lettersCounted = lettersCounted
    } else if (lettersCounted[letters]) {
      lettersCounted[letters] += 1;
    } else {
      lettersCounted[letters] = 1;
    }
  }

  return lettersCounted;
}
