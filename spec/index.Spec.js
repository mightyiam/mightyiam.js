/* eslint-env node, jasmine */
var mightyiam = require('..')

describe('mightyiam', function () {
  it('has a first name', function () {
    expect(typeof mightyiam.firstName).toBe('string')
  })
  it('has a last name', function () {
    expect(typeof mightyiam.lastName).toBe('string')
  })
  it('has a full name', function () {
    expect(typeof mightyiam.fullName).toBe('string')
  })

  it('has a website', function () {
    expect(typeof mightyiam.website).toBe('string')
  })
  it('has an email', function () {
    expect(typeof mightyiam.email).toBe('string')
  })

  describe('github account', function () {
    var github = mightyiam.github
    it('has a username', function () {
      expect(typeof github.username).toBe('string')
    })
    it('has a profile URL', function () {
      expect(typeof github.profileUrl).toBe('string')
    })
  })

  it('has an author string', function () {
    expect(typeof mightyiam.authorString).toBe('string')
  })
})
