const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');


describe ('#tail', () => {
  it('returns 0 for [].length', () => {
    assert.deepEqual(tail([]).length, 0);
  });

  it('returns undefined for [] at [0]', () => {
    assert.deepEqual(tail([])[0], undefined);
  });

  it('returns 0 for ["Yo Yo"].length', () => {
    assert.deepEqual(tail(["Yo Yo"]).length, 0);
  });

  it('returns undefined for ["Yo Yo"] at [0]', () => {
    assert.deepEqual(tail(['Yo Yo'])[0], undefined);
  });

  it('returns 2 for ["Yo Yo", "Lighthouse", "Labs"].length', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
  });

  it('returns "Lighthouse" for ["Yo Yo", "Lighthouse", "Labs"] at [0]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"])[0], "Lighthouse");
  });

  it('returns "Labs" for ["Yo Yo", "Lighthouse", "Labs"] at [1]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"])[1], "Labs");
  });

});