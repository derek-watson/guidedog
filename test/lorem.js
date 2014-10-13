var lorem = require('../lib/lorem')

describe('lorem ipsum expander', function() {
  describe('expanding text', function() {
    it('returns what it was given', function() {
      var result = lorem('hello world')
      assert.equal(result, 'hello world')
    })
    it('does nothing when passed just "lorem"', function() {
      var result = lorem('lorem')
      assert.equal(result, 'lorem')
    })
    it('returns one sentence of text when given lorem1', function() {
      var result = lorem('lorem1')
      assert.isString(result)
      assert.notEqual(result, 'lorem1')
      assert.equal(result.split('\w+\.').length, 1)
    })
    it('returns four sentences of text when given lorem4', function() {
      var result = lorem('lorem4')
      assert.isString(result)
      assert.notEqual(result, 'lorem4')
      assert.equal(result.match(/\./g).length, 4)
    })
  })
})
