const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it('returns {} for "" ', () => {
    assert.deepEqual(letterPositions(''), {});
  });

  it('returns {a: [0]} for "a" ', () => {
    assert.deepEqual(letterPositions('a'), {a: [0]});
  });

  it('returns {H: [0], e: [1], l: [2, 3], o: [4]} for "Hello" ', () => {
    assert.deepEqual(letterPositions('Hello'), {H: [0], e: [1], l: [2, 3], o: [4]});
  });
  
});