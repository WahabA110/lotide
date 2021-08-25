const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

describe('#findKey', () => {
  it('returns undefined for no key input', () => {
    assert.deepEqual(findKey(), undefined)
  });

  it('returns "Brooklyn 99" for {"Brooklyn 99": Comedy}, x => x === "Comedy"', () => {
    assert.deepEqual(findKey({"Brooklyn 99": "Comedy"}, x => "Comedy"), "Brooklyn 99")
  });

  it('returns "Brooklyn 99" for {"The Wire": "Suspense","Fresh Prince": "SitCom" "Dave Chappelle": "Skits","Brooklyn 99": "Comedy","The Office": "Comedy","Key and Peele": "Skits"}, x => x === "Comedy"', () => {
    assert.deepEqual(findKey({"The Wire": "Suspense","Fresh Prince": "SitCom","Dave Chappelle": "Skits","Brooklyn 99": "Comedy","The Office": "Comedy","Key and Peele": "Skits"}, x => x === "Comedy"), "Brooklyn 99")
  });

  it('returns "noma" for {"Blue Hill": {stars: 1}, "Akaleri":{stars: 3}, "noma": {stars: 2}, "elBulli": {stars: 3}, "Ora": {stars: 2}, "Akelarre": {stars: 3}}, x => x.stars === 2)', () => {
    assert.deepEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2), "noma")
  });

});