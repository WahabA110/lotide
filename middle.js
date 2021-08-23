const middle = function (array) {
  let midArray = [];
  if (array.length < 3) {
    return midArray;
  }
  if (array.length % 2 === 0) {
    const firstMid = array[Math.floor((array.length - 1) / 2)];
    const secondMid = array[Math.floor(array.length / 2)];
    midArray.push(firstMid);
    midArray.push(secondMid);
  }
  if (array.length % 2 !== 0) {
    const theMid = array[Math.floor(array.length / 2)];
    midArray.push(theMid);
  }

  return midArray;
};

module.exports = middle;