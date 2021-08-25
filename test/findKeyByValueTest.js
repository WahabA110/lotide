const assert = require('chai').assert;
const assertEqual = require('../assertEqual')
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  it('returns undefined for {}, ""', () => {
    assert.deepEqual(findKeyByValue({}, ''), undefined);
  });

  it('returns drama for {drama:  "The Wire"}, "The Wire" ', () => {
    assert.deepEqual(findKeyByValue({drama:  "The Wire"}, 'The Wire'), 'drama');
  });

  it('returns undefined for {drama:  "The Wire"}, "Fresh Prince" ', () => {
    assert.deepEqual(findKeyByValue({drama:  "The Wire"}, 'Fresh Prince'), undefined);
  });

  it('returns comedy for {sci_fi: "The Expanse",comedy: "Brooklyn Nine-Nine",drama:  "The Wire"}, "Brooklyn Nine-Nine" ', () => {
    assert.deepEqual(findKeyByValue({sci_fi: "The Expanse",comedy: "Brooklyn Nine-Nine",drama:  "The Wire"}, 'Brooklyn Nine-Nine'), 'comedy');
  });

});