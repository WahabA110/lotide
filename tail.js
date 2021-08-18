const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


function tail(arr) {
  let group = [];
  for (let i = 1; i < arr.length; i ++) {
    group.push(arr[i]);
  }
  return group;
}

const words = [];
const word = ["Yo Yo"];
console.log(tail(words));
console.log(tail(word));