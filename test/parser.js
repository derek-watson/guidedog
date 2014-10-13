var yamlDump = require('js-yaml').dump
var parser = require('../lib/parser')

describe('guidedog comment parser', function() {

  it('returns a new object if nothing was given as a second argument', function() {
    var result = parser('')
    assert.isObject(result)
  })

  it('returns the same object it was given as a second argument', function() {
    var obj = { existing: true, sections: [] }
    var result = parser('', obj)
    assert.strictEqual(result, obj)
  })

  describe('matching comments', function() {
    it('matches double exclamation marks', function() {
      var result = parser('/*!! hello */')

      assert.equal(result.sections.length, 1)
      assert.equal(result.sections[0].subSections.length, 1)
      assert.equal(result.sections[0].subSections[0], 'hello')
    })

    it('matches triple exclamation marks', function() {
      var result = parser('/*!!! hello */')

      assert.equal(result.sections.length, 1)
      assert.equal(result.sections[0].subSections.length, 1)
      assert.equal(result.sections[0].subSections[0], 'hello')
    })

    it('requires zero spaces between the opening comment block and the first !', function() {
      var result = parser('/* !!! */')
      assert.deepEqual(result, { sections: [] })
    })

    it('matches a series of comments in a row', function() {
      var comments = [
        '/*!!! hello */',
        '/*!!! hello */',
        '/*!!! hello */',
        '/*!!! hello */'
      ].join('\n')

      var results = parser(comments)

      assert.equal(results.sections.length, 1)
      assert.equal(results.sections[0].subSections.length, 4)
    })

    it('matches a series of comments separated by arbitrary non-comment text', function() {
      var separatorText = '\n\nThis is some arbitrary text\nSeparating the comments\n\n'
      var comments = [
        '/*!!! hello */',
        '/*!!! hello */',
        '/*!!! hello */',
        '/*!!! hello */'
      ].join(separatorText)

      var results = parser(comments)

      assert.equal(results.sections.length, 1)
      assert.equal(results.sections[0].subSections.length, 4)
    })
  })

  describe('parsing yaml comment bodies', function() {
    it('parses arbitrary yaml structures', function() {
      var obj = {
        section: 'abc',
        abc: 123,
        arr: [4,5,6],
        kv: {
          Keith: 'Valerie'
        }
      }
      var yaml = yamlDump(obj)
      var comment = ['/*!!!', yaml, '*/'].join('\n')

      var result = parser(comment)

      assert.deepEqual(result.sections[0].subSections[0], obj)
    })

    it('groups comments into sections', function() {
      var commentA = ['/*!!!', yamlDump({section: 'One'}), '*/'].join('\n')
      var commentB = ['/*!!!', yamlDump({section: 'One'}), '*/'].join('\n')
      var commentC = ['/*!!!', yamlDump({section: 'Two'}), '*/'].join('\n')
      var commentD = ['/*!!!', yamlDump({section: 'Three'}), '*/'].join('\n')
      var commentE = ['/*!!!', yamlDump({section: 'Three'}), '*/'].join('\n')
      var comments = [commentA, commentB, commentC, commentD, commentE].join('\n')

      var results = parser(comments)

      assert.equal(results.sections.length, 3)
      assert.equal(results.sections[0].section, 'One')
      assert.equal(results.sections[0].subSections.length, 2)
      assert.equal(results.sections[1].section, 'Two')
      assert.equal(results.sections[1].subSections.length, 1)
      assert.equal(results.sections[2].section, 'Three')
      assert.equal(results.sections[2].subSections.length, 2)
    })
  })

  describe('parsing markdown descriptions', function() {
    it('parses markdown descriptions', function() {
      var markdown = '**bold text**'
      var expected = '<p><strong>bold text</strong></p>'

      var comment = ['/*!!!', yamlDump({section: 'a', description: markdown}), '*/'].join('\n')

      var results = parser(comment)

      assert.equal(results.sections[0].subSections[0].description, expected)
    })
  })

  describe('expanding loremX in the comment bodies', function() {
    it('matches and expands anywhere in the comment body', function() {
      var result = parser('/*!!! lorem2 */')

      assert.equal(result.sections.length, 1)
      assert.equal(result.sections[0].subSections.length, 1)
      assert.notInclude(result.sections[0].subSections[0], 'lorem2')
      assert(result.sections[0].subSections[0].split(' ').length > 10)
    })
  })
})
