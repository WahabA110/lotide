const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

describe ('#eqArrays', () => {
  it('returns true for [],[]', () => {
    assert.deepEqual(eqArrays([],[]), true);
  });

  it('returns true for [1],[1]', () => {
    assert.deepEqual(eqArrays([1],[1]), true);
  });

  it('returns true for [1, 2, 3],[1, 2, 3]', () => {
    assert.deepEqual(eqArrays([1, 2, 3],[1, 2, 3]), true);
  });

  it('returns false for [1, 2],[1, 2, 3]', () => {
    assert.deepEqual(eqArrays([1, 2],[1, 2, 3]), false);
  });

  it('returns false for [1, 2],[2, 1]', () => {
    assert.deepEqual(eqArrays([1, 2],[2, 1]), false);
  });

});