const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  it('returns {} for "", {} ', () => {
    assert.deepEqual(countOnly('', {}), {});
  });

  it('returns {a: 1} for ["a"], {a: true} ', () => {
    assert.deepEqual(countOnly(['a'], {a: true}), {a: 1});
  });

  it('returns {Fang: 2, Jason: 1} for ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false } ', () => {
    assert.deepEqual(countOnly(["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), {Fang: 2, Jason: 1});
  });

});