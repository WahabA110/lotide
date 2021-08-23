const countOnly = function(allItems, itemsToCount) {
  let itemsCounted = {};
  for (let name of allItems) {
    if (itemsToCount[name]) {
      if (itemsCounted[name]) {
        itemsCounted[name] += 1;
      } else {
        itemsCounted[name] = 1;
      }
    }
  }

  return itemsCounted;
}

module.exports = countOnly;