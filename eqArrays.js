const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arrVal1, arrVal2) {
  let firstString = "";
  let secondString = "";
  for (let arrEle1 of arrVal1) {
    firstString += arrEle1;
  }
  for (let arrEle2 of arrVal2) {
    secondString += arrEle2;
  }

  if (firstString === secondString) {
    return true;
  }
  else if (firstString !== secondString) {
    return false
  }
  // go through each element in array 1
  // go through each element in array 2
  // compare if each element in array 1 is equal to each is array 2
  // log true if it is and false if it isn't
}
