const assert = require('assert')
const { humanReadableString } = require('../humanReadableString')

const tests = {
  0: 'zero',
  1: 'one',
  11: 'eleven',
  21: 'twenty one',
  321: 'three hundred twenty one',
  4321: 'four thousand three hundred twenty one',
  4001: 'four thousand one',
  54321: 'fifty four thousand three hundred twenty one',
  '-54321': 'negative fifty four thousand three hundred twenty one',
  4012017: 'four million twelve thousand seventeen',
  4000017: 'four million seventeen',
  4001000017: 'four billion one million seventeen',
  4000001000017: 'four trillion one million seventeen',
  7000000001000017: 'seven quadrillion one million seventeen',
}

describe('humanReadableString', () => {
  Object.keys(tests).forEach(input => {

    const expected = tests[input]

    it(`${input} => ${expected}`, () => {
      const cleanInput = typeof input === 'number' ? input : Number.parseInt(input)
      assert.equal(
        humanReadableString(cleanInput),
        expected
      )
    })
  })
});