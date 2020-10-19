const assert = require('assert')
const { humanReadableString } = require('../humanReadableString')

describe('humanReadableString', () => {
  it('0 => "zero"', () => { assert.equal(humanReadableString(0), "zero") })
  it('1 => "one"', () => { assert.equal(humanReadableString(1), "one") })
  it('11 => "eleven"', () => { assert.equal(humanReadableString(11), "eleven") })
  it('21 => "twenty one"', () => { assert.equal(humanReadableString(21), "twenty one") })
  it('321 => "three hundred twenty one"', () => { assert.equal(humanReadableString(321), "three hundred twenty one") })
  it('4321 => "four thousand three hundred twenty one"', () => { assert.equal(humanReadableString(4321), "four thousand three hundred twenty one") })
  it('4001 => "four thousand one"', () => { assert.equal(humanReadableString(4001), "four thousand one") })
  it('54321 => "fifty four thousand three hundred twenty one"', () => { assert.equal(humanReadableString(54321), "fifty four thousand three hundred twenty one") })
  it('-54321 => "negative fifty four thousand three hundred twenty one"', () => { assert.equal(humanReadableString(-54321), "negative fifty four thousand three hundred twenty one") })
  it('4012017 => "four million twelve thousand seventeen"', () => { assert.equal(humanReadableString(4012017), "four million twelve thousand seventeen") })
  it('4000017 => "four million seventeen"', () => { assert.equal(humanReadableString(4000017), "four million seventeen") })
});