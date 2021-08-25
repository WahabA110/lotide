const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let values of Object.keys(object1)) {
    if (Array.isArray(object1[values])) {
      return eqArrays(object1[values], object2[values])
    } 
    else {
      if (object1[values] !== object2[values]) {
        return false;
      }
    }
  }

  return true;
};

module.exports = eqObjects;