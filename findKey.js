const findKey = function(object, callback) {
  let found = '';

  for (let key in object) {
    if (callback(object[key])) {
      found = key;
      return found;
    }
  }
};

module.exports = findKey;

