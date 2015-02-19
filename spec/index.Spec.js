/* eslint-env node, jasmine */
var mightyiam = require('..')

describe('mightyiam', function () {
  it('has an author string', function () {
    expect(typeof mightyiam.authorString).toBe('string')
  })
})
