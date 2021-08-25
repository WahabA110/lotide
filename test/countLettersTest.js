const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it('returns {} for "" ', () => {
    assert.deepEqual(countLetters(''), {});
  });

  it('returns { L: 1 } for "L" ', () => {
    assert.deepEqual(countLetters('L'), {L: 1});
  });

  it('returns { L: 2, H: 1 } for "LHL" ', () => {
    assert.deepEqual(countLetters('LHL'), {L: 2, H: 1});
  });

  it('returns { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } for "lighthouse in the house" ', () => {
    assert.deepEqual(countLetters('lighthouse in the house'), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });

});