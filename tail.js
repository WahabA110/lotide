function tail(arr) {
  let group = [];
  for (let i = 1; i < arr.length; i ++) {
    group.push(arr[i]);
  }
  return group;
}

module.exports = tail;