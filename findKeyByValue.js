const findKeyByValue = function(object, value) {
  let key;
  for (let genre in object) {
    if (object[genre] === value) {
      key = genre;
    }
  }

  return key;
}

module.exports = findKeyByValue;
