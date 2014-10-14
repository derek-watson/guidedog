var lorem = require('./lorem')
var mmd = require('micromarkdown')
var yaml = require('js-yaml/lib/js-yaml/loader')

var re = /\/\*\!{2,3}([\s\S]*?)\*\//mg

function slugify(str) {
  return (str || '').replace(/\s+/g, '').toLowerCase()
}

function findSection(name, data) {
  var match
  data.sections.forEach(function(section) {
    if (section.section == name)
      match = section
  })
  return match
}

module.exports = function(stylesheetText, data) {
  data = data || {}
  data.sections = data.sections || []

  var match
  while (match = re.exec(stylesheetText)) {

    var body = match[1]

    body = lorem(body)

    var subSection = yaml.load(body)

    if (!subSection.section)
      subSection.section = 'Undefined'

    if (subSection.description)
      subSection.description = mmd.parse(subSection.description)

    var section = findSection(subSection.section, data)

    if (!section) {
      section = {
        id: slugify(subSection.section),
        section: subSection.section,
        subSections: []
      }

      data.sections.push(section)
    }

    section.subSections.push(subSection)
  }

  return data
}
