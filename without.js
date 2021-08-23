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

module.exports = without;
