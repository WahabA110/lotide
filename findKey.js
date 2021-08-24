const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  let found = '';

  for (let key in object) {
    // console.log(key)
    if (callback(object[key])) {
      found = key;
      return found;
    }
  }
};


assertEqual(findKey({
  "The Wire": "Suspense",
  "Fresh Prince": "SitCom",
  "Dave Chappelle": "Skits",
  "Brooklyn 99": "Comedy",
  "The Office": "Comedy",
  "Key and Peele": "Skits"
}, x => x === "Comedy"), "Brooklyn 99")



assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma")