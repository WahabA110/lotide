const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const map = require('../map')

describe('#map', () => {
  it('returns [] for [],"" ', () => {
    assert.deepEqual(map([], ""), []);
  });

  it('returns ["g"] for ["ground"], word => word[0]', () => {
    assert.deepEqual(map(['ground'], word => word[0]), ['g'])
  });

  it('returns ["g", "c", "t", "m", "t"] for ["ground", "control", "to", "major", "tom"], word => word[0]', () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), ["g", "c", "t", "m", "t"]);
  });

});