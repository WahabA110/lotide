const assert = require('chai').assert;
const assertEqual = require('../assertEqual')
const without = require('../without');

describe('#without', () => {
  it('returns [] for "" ', () => {
    assert.deepEqual(without('',''), []);
  });

  it('returns [] for ["hello"],["hello"] ', () => {
    assert.deepEqual(without(['hello'],['hello']), []);
  });

  it('returns ["world"] for ["hello", "world"],["hello"] ', () => {
    assert.deepEqual(without(["hello", "world"],['hello']), ['world']);
  });
  
});