this["Guidedog"] = this["Guidedog"] || {};
this["Guidedog"]["templates"] = this["Guidedog"]["templates"] || {};
this["Guidedog"]["templates"]["index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <section class=\"sg\">\n    <a class=\"sg-target\" id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" name=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></a>\n    <h2 class=\"sg\">";
  if (helper = helpers.section) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.section); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.subSections), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </section>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.title), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.description), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.html), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.html), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.jade), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      <div class='sg-swatches'>\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.swatches), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<h3 class=\"sg\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<span class=\"sg\"> ";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " </span>";
  return buffer;
  }

function program7(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.html) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.html); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<pre class=\"line-numbers\"><code class=\"language-markup\">";
  if (helper = helpers.html) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.html); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</code></pre>";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <div class=\"sg-jade\">\n          <div class=\"sg-example\"></div>\n          <div class=\"sg-tabs\">\n            <ul class=\"sg-tabs-trigger\">\n              <li class=\"sg-tabs-active\">HTML</li>\n              <li>Jade</li>\n            </ul>\n            <ul class=\"sg-tabs-content\">\n              <li class=\"sg-tabs-active\"><pre class=\"line-numbers\"><code class=\"language-markup\"></code></pre></li>\n              <li><pre class=\"line-numbers\"><code class=\"language-haskell\">";
  if (helper = helpers.jade) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.jade); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</code></pre></li>\n            </ul>\n          </div>\n        </div>\n      ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <div class='sg-swatch'>\n          <div class='sg-swatch-sample' style=\"background-color: ";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n          </div>\n          <div class='sg-swatch-info'>\n            <span class='sg-swatch-name'>\n              ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n            </span>\n            <span class='sg-swatch-value'>\n              ";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n            </span>\n          </div>\n        </div>\n        ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <img class='sg' src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.info)),stack1 == null || stack1 === false ? stack1 : stack1.logo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n  ";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <a href=\"#";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.section) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.section); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n  ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.sections), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<nav class='sg'>\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.info)),stack1 == null || stack1 === false ? stack1 : stack1.logo), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.sections), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</nav>\n";
  return buffer;
  });
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// browserify entry-point
window.Guidedog = window.Guidedog || {}
window.Guidedog.parser = require('./parser')

},{"./parser":3}],2:[function(require,module,exports){
var re = /lorem[^\s]+/g
var key = 'lorem'

var words = [
  'lorem',
  'ipsum',
  'dolor',
  'sit',
  'amet',
  'consectetuer',
  'adipiscing',
  'elit',
  'sed',
  'diam',
  'nonummy',
  'nibh',
  'euismod', 'tincidunt',
  'ut',
  'laoreet'
]

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = function(str) {
  var wordsCnt = words.length-1

  return str.replace(re, function(cnt, index){
    cnt = parseInt(cnt.replace(key, ''))

    var paragraph = ''
    for(var b=1; b<=cnt; b++){
      var sentence = ''
      var sentenceLength = rand(12,16);
      for(var i=0; i<=sentenceLength; i++){
        sentence += ' ' + words[rand(0, wordsCnt)]
        if(i==0){
          sentence = sentence.substr(1)
          sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1)
        }
        else if(i==sentenceLength){
          sentence += '. '
          paragraph += sentence
        }
      }
    }
    return paragraph
  })
}

},{}],3:[function(require,module,exports){
var lorem = require('./lorem')
var mmd = require('micromarkdown')
var yaml = require('yaml')

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

    console.log(body)
    var subSection = yaml.eval(body.replace(/^\s+/g, ''))

    console.log(subSection)

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

},{"./lorem":2,"micromarkdown":4,"yaml":5}],4:[function(require,module,exports){
/*
 * µmarkdown.js
 * markdown in under 5kb
 *
 * Copyright 2014, Simon Waldherr - http://simon.waldherr.eu/
 * Released under the MIT Licence
 * http://simon.waldherr.eu/license/mit/
 *
 * Github:  https://github.com/simonwaldherr/micromarkdown.js/
 * Version: 0.3.0
 */

/*jslint browser: true, node: true, plusplus: true, indent: 2, regexp: true, ass: true */
/*global ActiveXObject, define */

var micromarkdown = {
  useajax: false,
  regexobject: {
    headline: /^(\#{1,6})([^\#\n]+)$/m,
    code: /\s\`\`\`\n?([^`]+)\`\`\`/g,
    hr: /^(?:([\*\-_] ?)+)\1\1$/gm,
    lists: /^((\s*((\*|\-)|\d(\.|\))) [^\n]+)\n)+/gm,
    bolditalic: /(?:([\*_~]{1,3}))([^\*_~\n]+[^\*_~\s])\1/g,
    links: /!?\[([^\]<>]+)\]\(([^ \)<>]+)( "[^\(\)\"]+")?\)/g,
    reflinks: /\[([^\]]+)\]\[([^\]]+)\]/g,
    smlinks: /\@([a-z0-9]{3,})\@(t|gh|fb|gp|adn)/gi,
    mail: /<(([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,7}))>/gmi,
    tables: /\n(([^|\n]+ *\| *)+([^|\n]+\n))((:?\-+:?\|)+(:?\-+:?)*\n)((([^|\n]+ *\| *)+([^|\n]+)\n)+)/g,
    include: /[\[<]include (\S+) from (https?:\/\/[a-z0-9\.\-]+\.[a-z]{2,9}[a-z0-9\.\-\?\&\/]+)[\]>]/gi,
    url: /<([a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[\-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?)>/g
  },
  parse: function (str, strict) {
    'use strict';
    var line, nstatus = 0,
      status, cel, calign, indent, helper, helper1, helper2, count, repstr, stra, trashgc = [],
      casca = 0,
      i = 0,
      j = 0;
    str = '\n' + str + '\n';

    if (strict !== true) {
      micromarkdown.regexobject.lists = /^((\s*(\*|\d\.) [^\n]+)\n)+/gm;
    }

    /* code */
    while ((stra = micromarkdown.regexobject.code.exec(str)) !== null) {
      str = str.replace(stra[0], '<code>\n' + micromarkdown.htmlEncode(stra[1]).replace(/\n/gm, '<br/>').replace(/\ /gm, '&nbsp;') + '</code>\n');
    }

    /* headlines */
    while ((stra = micromarkdown.regexobject.headline.exec(str)) !== null) {
      count = stra[1].length;
      str = str.replace(stra[0], '<h' + count + '>' + stra[2] + '</h' + count + '>' + '\n');
    }

    /* lists */
    while ((stra = micromarkdown.regexobject.lists.exec(str)) !== null) {
      casca = 0;
      if ((stra[0].trim().substr(0, 1) === '*') || (stra[0].trim().substr(0, 1) === '-')) {
        repstr = '<ul>';
      } else {
        repstr = '<ol>';
      }
      helper = stra[0].split('\n');
      helper1 = [];
      status = 0;
      indent = false;
      for (i = 0; i < helper.length; i++) {
        if ((line = /^((\s*)((\*|\-)|\d(\.|\))) ([^\n]+))/.exec(helper[i])) !== null) {
          if ((line[2] === undefined) || (line[2].length === 0)) {
            nstatus = 0;
          } else {
            if (indent === false) {
              indent = line[2].replace(/\t/, '    ').length;
            }
            nstatus = Math.round(line[2].replace(/\t/, '    ').length / indent);
          }
          while (status > nstatus) {
            repstr += helper1.pop();
            status--;
            casca--;
          }
          while (status < nstatus) {
            if ((line[0].trim().substr(0, 1) === '*') || (line[0].trim().substr(0, 1) === '-')) {
              repstr += '<ul>';
              helper1.push('</ul>');
            } else {
              repstr += '<ol>';
              helper1.push('</ol>');
            }
            status++;
            casca++;
          }
          repstr += '<li>' + line[6] + '</li>' + '\n';
        }
      }
      while (casca > 0) {
        repstr += '</ul>';
        casca--;
      }
      if ((stra[0].trim().substr(0, 1) === '*') || (stra[0].trim().substr(0, 1) === '-')) {
        repstr += '</ul>';
      } else {
        repstr += '</ol>';
      }
      str = str.replace(stra[0], repstr + '\n');
    }

    /* tables */
    while ((stra = micromarkdown.regexobject.tables.exec(str)) !== null) {
      repstr = '<table><tr>';
      helper = stra[1].split('|');
      calign = stra[4].split('|');
      for (i = 0; i < helper.length; i++) {
        if (calign.length <= i) {
          calign.push(0);
        } else if ((calign[i].trimRight().slice(-1) === ':') && (strict !== true)) {
          if (calign[i][0] === ':') {
            calign[i] = 3;
          } else {
            calign[i] = 2;
          }
        } else if (strict !== true) {
          if (calign[i][0] === ':') {
            calign[i] = 1;
          } else {
            calign[i] = 0;
          }
        } else {
          calign[i] = 0;
        }
      }
      cel = ['<th>', '<th align="left">', '<th align="right">', '<th align="center">'];
      for (i = 0; i < helper.length; i++) {
        repstr += cel[calign[i]] + helper[i].trim() + '</th>';
      }
      repstr += '</tr>';
      cel = ['<td>', '<td align="left">', '<td align="right">', '<td align="center">'];
      helper1 = stra[7].split('\n');
      for (i = 0; i < helper1.length; i++) {
        helper2 = helper1[i].split('|');
        if (helper2[0].length !== 0) {
          while (calign.length < helper2.length) {
            calign.push(0);
          }
          repstr += '<tr>';
          for (j = 0; j < helper2.length; j++) {
            repstr += cel[calign[j]] + helper2[j].trim() + '</td>';
          }
          repstr += '</tr>' + '\n';
        }
      }
      repstr += '</table>';
      str = str.replace(stra[0], repstr);
    }

    /* bold and italic */
    for (i = 0; i < 3; i++) {
      while ((stra = micromarkdown.regexobject.bolditalic.exec(str)) !== null) {
        repstr = [];
        if (stra[1] === '~~') {
          str = str.replace(stra[0], '<del>' + stra[2] + '</del>');
        } else {
          switch (stra[1].length) {
          case 1:
            repstr = ['<i>', '</i>'];
            break;
          case 2:
            repstr = ['<b>', '</b>'];
            break;
          case 3:
            repstr = ['<i><b>', '</b></i>'];
            break;
          }
          str = str.replace(stra[0], repstr[0] + stra[2] + repstr[1]);
        }
      }
    }

    /* links */
    while ((stra = micromarkdown.regexobject.links.exec(str)) !== null) {
      if (stra[0].substr(0, 1) === '!') {
        str = str.replace(stra[0], '<img src="' + stra[2] + '" alt="' + stra[1] + '" title="' + stra[1] + '" />\n');
      } else {
        str = str.replace(stra[0], '<a ' + micromarkdown.mmdCSSclass(stra[2], strict) + 'href="' + stra[2] + '">' + stra[1] + '</a>\n');
      }
    }
    while ((stra = micromarkdown.regexobject.mail.exec(str)) !== null) {
      str = str.replace(stra[0], '<a href="mailto:' + stra[1] + '">' + stra[1] + '</a>');
    }
    while ((stra = micromarkdown.regexobject.url.exec(str)) !== null) {
      repstr = stra[1];
      if (repstr.indexOf('://') === -1) {
        repstr = 'http://' + repstr;
      }
      str = str.replace(stra[0], '<a ' + micromarkdown.mmdCSSclass(repstr, strict) + 'href="' + repstr + '">' + repstr.replace(/(https:\/\/|http:\/\/|mailto:|ftp:\/\/)/gmi, '') + '</a>');
    }
    while ((stra = micromarkdown.regexobject.reflinks.exec(str)) !== null) {
      helper1 = new RegExp('\\[' + stra[2] + '\\]: ?([^ \n]+)', "gi");
      if ((helper = helper1.exec(str)) !== null) {
        str = str.replace(stra[0], '<a ' + micromarkdown.mmdCSSclass(helper[1], strict) + 'href="' + helper[1] + '">' + stra[1] + '</a>');
        trashgc.push(helper[0]);
      }
    }
    for (i = 0; i < trashgc.length; i++) {
      str = str.replace(trashgc[i], '');
    }
    while ((stra = micromarkdown.regexobject.smlinks.exec(str)) !== null) {
      switch (stra[2]) {
      case 't':
        repstr = 'https://twitter.com/' + stra[1];
        break;
      case 'gh':
        repstr = 'https://github.com/' + stra[1];
        break;
      case 'fb':
        repstr = 'https://www.facebook.com/' + stra[1];
        break;
      case 'gp':
        repstr = 'https://plus.google.com/+' + stra[1];
        break;
      case 'adn':
        repstr = 'https://alpha.app.net/' + stra[1];
        break;
      }
      str = str.replace(stra[0], '<a ' + micromarkdown.mmdCSSclass(repstr, strict) + 'href="' + repstr + '">' + stra[1] + '</a>');
    }

    /* horizontal line */
    while ((stra = micromarkdown.regexobject.hr.exec(str)) !== null) {
      str = str.replace(stra[0], '\n<hr/>\n');
    }

    /* include */
    if ((micromarkdown.useajax !== false) && (strict !== true)) {
      while ((stra = micromarkdown.regexobject.include.exec(str)) !== null) {
        helper = stra[2].replace(/[\.\:\/]+/gm, '');
        helper1 = '';
        if (document.getElementById(helper)) {
          helper1 = document.getElementById(helper).innerHTML.trim();
        } else {
          micromarkdown.ajax(stra[2]);
        }
        if ((stra[1] === 'csv') && (helper1 !== '')) {
          helper2 = {
            ';': [],
            '\t': [],
            ',': [],
            '|': []
          };
          helper2[0] = [';', '\t', ',', '|'];
          helper1 = helper1.split('\n');
          for (j = 0; j < helper2[0].length; j++) {
            for (i = 0; i < helper1.length; i++) {
              if (i > 0) {
                if (helper2[helper2[0][j]] !== false) {
                  if ((helper2[helper2[0][j]][i] !== helper2[helper2[0][j]][i - 1]) || (helper2[helper2[0][j]][i] === 1)) {
                    helper2[helper2[0][j]] = false;
                  }
                }
              }
            }
          }
          if ((helper2[';'] !== false) || (helper2['\t'] !== false) || (helper2[','] !== false) || (helper2['|'] !== false)) {
            if (helper2[';'] !== false) {
              helper2 = ';';
            } else if (helper2['\t']) {
              helper2 = '\t';
            } else if (helper2[',']) {
              helper2 = ',';
            } else if (helper2['|']) {
              helper2 = '|';
            }
            repstr = '<table>';
            for (i = 0; i < helper1.length; i++) {
              helper = helper1[i].split(helper2);
              repstr += '<tr>';
              for (j = 0; j < helper.length; j++) {
                repstr += '<td>' + micromarkdown.htmlEncode(helper[j]) + '</td>';
              }
              repstr += '</tr>';
            }
            repstr += '</table>';
            str = str.replace(stra[0], repstr);
          } else {
            str = str.replace(stra[0], '<code>' + helper1.join('\n') + '</code>');
          }
        } else {
          str = str.replace(stra[0], '');
        }
      }
    }

    str = str.replace(/ {2,}[\n]{1,}/gmi, '<br/><br/>');
    return str;
  },
  ajax: function (str) {
    'use strict';
    var xhr;
    if (document.getElementById(str.replace(/[\.\:\/]+/gm, ''))) {
      return false;
    }
    if (window.ActiveXObject) {
      try {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        xhr = null;
        return e;
      }
    } else {
      xhr = new XMLHttpRequest();
    }
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        var ele = document.createElement('code');
        ele.innerHTML = xhr.responseText;
        ele.id = str.replace(/[\.\:\/]+/gm, '');
        ele.style.display = 'none';
        document.getElementsByTagName('body')[0].appendChild(ele);
        micromarkdown.useajax();
      }
    };
    xhr.open('GET', str, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send();
  },
  countingChars: function (str, split) {
    'use strict';
    str = str.split(split);
    if (typeof str === 'object') {
      return str.length - 1;
    }
    return 0;
  },
  htmlEncode: function (str) {
    'use strict';
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    str = div.innerHTML;
    div = undefined;
    return str;
  },
  mmdCSSclass: function (str, strict) {
    'use strict';
    var urlTemp;
    if ((str.indexOf('/') !== -1) && (strict !== true)) {
      urlTemp = str.split('/');
      if (urlTemp[1].length === 0) {
        urlTemp = urlTemp[2].split('.');
      } else {
        urlTemp = urlTemp[0].split('.');
      }
      return 'class="mmd_' + urlTemp[urlTemp.length - 2].replace(/[^\w\d]/g, '') + urlTemp[urlTemp.length - 1] + '" ';
    }
    return '';
  }
};

(function (root, factory) {
  "use strict";
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.returnExports = factory();
  }
}(this, function () {
  'use strict';
  return micromarkdown;
}));

},{}],5:[function(require,module,exports){
// YAML - Core - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

/**
 * Version triplet.
 */

exports.version = '0.2.3'

// --- Helpers

/**
 * Return 'near "context"' where context
 * is replaced by a chunk of _str_.
 *
 * @param  {string} str
 * @return {string}
 * @api public
 */

function context(str) {
  if (typeof str !== 'string') return ''
  str = str
    .slice(0, 25)
    .replace(/\n/g, '\\n')
    .replace(/"/g, '\\\"')
  return 'near "' + str + '"'
}

// --- Lexer

/**
 * YAML grammar tokens.
 */

var tokens = [
  ['comment', /^#[^\n]*/],
  ['indent', /^\n( *)/],
  ['space', /^ +/],
  ['true', /^\b(enabled|true|yes|on)\b/],
  ['false', /^\b(disabled|false|no|off)\b/],
  ['null', /^\b(null|Null|NULL|~)\b/],
  ['string', /^"(.*?)"/],
  ['string', /^'(.*?)'/],
  ['timestamp', /^((\d{4})-(\d\d?)-(\d\d?)(?:(?:[ \t]+)(\d\d?):(\d\d)(?::(\d\d))?)?)/],
  ['float', /^(\d+\.\d+)/],
  ['int', /^(\d+)/],
  ['doc', /^---/],
  [',', /^,/],
  ['{', /^\{(?![^\n\}]*\}[^\n]*[^\s\n\}])/],
  ['}', /^\}/],
  ['[', /^\[(?![^\n\]]*\][^\n]*[^\s\n\]])/],
  [']', /^\]/],
  ['-', /^\-/],
  [':', /^[:]/],
  ['string', /^(?![^:\n\s]*:[^\/]{2})(([^:,\]\}\n\s]|(?!\n)\s(?!\s*?\n)|:\/\/|,(?=[^\n]*\s*[^\]\}\s\n]\s*\n)|[\]\}](?=[^\n]*\s*[^\]\}\s\n]\s*\n))*)(?=[,:\]\}\s\n]|$)/], 
  ['id', /^([\w][\w -]*)/]
]

/**
 * Tokenize the given _str_.
 *
 * @param  {string} str
 * @return {array}
 * @api private
 */

exports.tokenize = function (str) {
  var token, captures, ignore, input,
      indents = 0, lastIndents = 0,
      stack = [], indentAmount = -1
  while (str.length) {
    for (var i = 0, len = tokens.length; i < len; ++i)
      if (captures = tokens[i][1].exec(str)) {
        token = [tokens[i][0], captures],
        str = str.replace(tokens[i][1], '')
        switch (token[0]) {
          case 'comment':
            ignore = true
            break
          case 'indent':
            lastIndents = indents 
            // determine the indentation amount from the first indent
            if (indentAmount == -1) {
              indentAmount = token[1][1].length
            }

            indents = token[1][1].length / indentAmount
            if (indents === lastIndents)
              ignore = true
            else if (indents > lastIndents + 1)
              throw new SyntaxError('invalid indentation, got ' + indents + ' instead of ' + (lastIndents + 1))
            else if (indents < lastIndents) {
              input = token[1].input
              token = ['dedent']
              token.input = input
              while (--lastIndents > indents)
                stack.push(token)
            }
        }
        break
      }
    if (!ignore)
      if (token)
        stack.push(token),
        token = null
      else 
        throw new SyntaxError(context(str))
    ignore = false
  }
  return stack
}

// --- Parser

/**
 * Initialize with _tokens_.
 */

function Parser(tokens) {
  this.tokens = tokens
}

/**
 * Look-ahead a single token.
 *
 * @return {array}
 * @api public
 */

Parser.prototype.peek = function() {
  return this.tokens[0]
}

/**
 * Advance by a single token.
 *
 * @return {array}
 * @api public
 */

Parser.prototype.advance = function() {
  return this.tokens.shift()
}

/**
 * Advance and return the token's value.
 *
 * @return {mixed}
 * @api private
 */

Parser.prototype.advanceValue = function() {
  return this.advance()[1][1]
}

/**
 * Accept _type_ and advance or do nothing.
 *
 * @param  {string} type
 * @return {bool}
 * @api private
 */

Parser.prototype.accept = function(type) {
  if (this.peekType(type))
    return this.advance()
}

/**
 * Expect _type_ or throw an error _msg_.
 *
 * @param  {string} type
 * @param  {string} msg
 * @api private
 */

Parser.prototype.expect = function(type, msg) {
  if (this.accept(type)) return
  throw new Error(msg + ', ' + context(this.peek()[1].input))
}

/**
 * Return the next token type.
 *
 * @return {string}
 * @api private
 */

Parser.prototype.peekType = function(val) {
  return this.tokens[0] &&
         this.tokens[0][0] === val
}

/**
 * space*
 */

Parser.prototype.ignoreSpace = function() {
  while (this.peekType('space'))
    this.advance()
}

/**
 * (space | indent | dedent)*
 */

Parser.prototype.ignoreWhitespace = function() {
  while (this.peekType('space') ||
         this.peekType('indent') ||
         this.peekType('dedent'))
    this.advance()
}

/**
 *   block
 * | doc
 * | list
 * | inlineList
 * | hash
 * | inlineHash
 * | string
 * | float
 * | int
 * | true
 * | false
 * | null
 */

Parser.prototype.parse = function() {
  switch (this.peek()[0]) {
    case 'doc':
      return this.parseDoc()
    case '-':
      return this.parseList()
    case '{':
      return this.parseInlineHash()
    case '[':
      return this.parseInlineList()
    case 'id':
      return this.parseHash()
    case 'string':
      return this.advanceValue()
    case 'timestamp':
      return this.parseTimestamp()
    case 'float':
      return parseFloat(this.advanceValue())
    case 'int':
      return parseInt(this.advanceValue())
    case 'true':
      this.advanceValue(); return true
    case 'false':
      this.advanceValue(); return false
    case 'null':
      this.advanceValue(); return null
  }
}

/**
 * '---'? indent expr dedent
 */

Parser.prototype.parseDoc = function() {
  this.accept('doc')
  this.expect('indent', 'expected indent after document')
  var val = this.parse()
  this.expect('dedent', 'document not properly dedented')
  return val
}

/**
 *  ( id ':' - expr -
 *  | id ':' - indent expr dedent
 *  )+
 */

Parser.prototype.parseHash = function() {
  var id, hash = {}
  while (this.peekType('id') && (id = this.advanceValue())) {
    this.expect(':', 'expected semi-colon after id')
    this.ignoreSpace()
    if (this.accept('indent'))
      hash[id] = this.parse(),
      this.expect('dedent', 'hash not properly dedented')
    else
      hash[id] = this.parse()
    this.ignoreSpace()
  }
  return hash
}

/**
 * '{' (- ','? ws id ':' - expr ws)* '}'
 */

Parser.prototype.parseInlineHash = function() {
  var hash = {}, id, i = 0
  this.accept('{')
  while (!this.accept('}')) {
    this.ignoreSpace()
    if (i) this.expect(',', 'expected comma')
    this.ignoreWhitespace()
    if (this.peekType('id') && (id = this.advanceValue())) {
      this.expect(':', 'expected semi-colon after id')
      this.ignoreSpace()
      hash[id] = this.parse()
      this.ignoreWhitespace()
    }
    ++i
  }
  return hash
}

/**
 *  ( '-' - expr -
 *  | '-' - indent expr dedent
 *  )+
 */

Parser.prototype.parseList = function() {
  var list = []
  while (this.accept('-')) {
    this.ignoreSpace()
    if (this.accept('indent'))
      list.push(this.parse()),
      this.expect('dedent', 'list item not properly dedented')
    else
      list.push(this.parse())
    this.ignoreSpace()
  }
  return list
}

/**
 * '[' (- ','? - expr -)* ']'
 */

Parser.prototype.parseInlineList = function() {
  var list = [], i = 0
  this.accept('[')
  while (!this.accept(']')) {
    this.ignoreSpace()
    if (i) this.expect(',', 'expected comma')
    this.ignoreSpace()
    list.push(this.parse())
    this.ignoreSpace()
    ++i
  }
  return list
}

/**
 * yyyy-mm-dd hh:mm:ss
 *
 * For full format: http://yaml.org/type/timestamp.html
 */

Parser.prototype.parseTimestamp = function() {
  var token = this.advance()[1]
  var date = new Date
  var year = token[2]
    , month = token[3]
    , day = token[4]
    , hour = token[5] || 0 
    , min = token[6] || 0
    , sec = token[7] || 0

  date.setUTCFullYear(year, month-1, day)
  date.setUTCHours(hour)
  date.setUTCMinutes(min)
  date.setUTCSeconds(sec)
  date.setUTCMilliseconds(0)
  return date
}

/**
 * Evaluate a _str_ of yaml.
 *
 * @param  {string} str
 * @return {mixed}
 * @api public
 */

exports.eval = function(str) {
  return (new Parser(exports.tokenize(str))).parse()
}

},{}]},{},[1])
(function($){
  $.fn.guidedog = function(options, callback){
    // default options
    var settings = $.extend({
      cssPaths: ['/css/app.css'],
      logoPath: 'http://placehold.it/250x100'
    }, options);

    var gdDOM = this          // retains reference to 'this'
    var gd = {}               // stores info to be passed to handlebars template
    var combinedResponse = '' // store all of the raw content to be parsed
    var crawlTotal = settings.cssPaths.length - 1
    gd.data = {}
    gd.data.info = {}
    gd.data.sections = []

    // root initializer
    var init = function(){
      fetch(0)
    }()

    // crawl through and combine all cssPaths' contents
    function fetch(crawlCnt){
      $.when($.get(settings.cssPaths[crawlCnt])).done(function(response) {
        combinedResponse += response
        if (crawlCnt === crawlTotal){
          parse()
        }
        else{
          fetch(crawlCnt + 1)
        }
      })
    }

    // parse all of the raw content
    var parse = function(){
      var expression = /\/\*\!\!([\s\S]*?)\*\//mg
      while ((match = expression.exec(combinedResponse)) != null){
        // work with !!! or !! (Less.js support)
        if(match[1].substring(0,1) == '!'){
          match[1] = match[1].substring(1)
        }
        match[1] = lorem(match[1]);

        console.log(match[1]);
        match = jsyaml.load(match[1])
        console.log(match);

        if(match.description) match.description = markdown.toHTML(match.description)
        if (new_section(match.section)){
          var section = match.section
          if(!match.section) match.section = 'Undefined'
          gd.data.sections.push({
            "section": match.section,
            "id": match.section.replace(/\s+/g, '').toLowerCase(),
            "subSections": []
          })
        }
        var index = sectionIndex(match.section)
        gd.data.sections[index].subSections.push(match)
      }
      gd.data.info.logo = settings.logoPath;
      render()
    }

    // expand lorem ipsum
    var lorem = function(str){
      var words = ['lorem','ipsum','dolor','sit','amet','consectetuer','adipiscing','elit','sed','diam','nonummy','nibh','euismod', 'tincidunt','ut','laoreet']
      var wordsCnt = words.length-1;
      var expression = /lorem[^\s]+/g
      return str.replace(expression, function(cnt, index){
        cnt = parseInt(cnt.replace('lorem', ''))
        var paragraph = ''
        for(var b=1; b<=cnt; b++){
          var sentence = ''
          var sentenceLength = rand(12,16);
          for(var i=0; i<=sentenceLength; i++){
            sentence += ' ' + words[rand(0, wordsCnt)]
            if(i==0){
              sentence = sentence.substr(1)
              sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1)
            }
            else if(i==sentenceLength){
              sentence += '. '
              paragraph += sentence
            }
          }
        }
        return paragraph;
      });
    }

    // return a random int within a range
    var rand = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // pass json data to Mustache template
    var render = function(){
      gdDOM.html('').prepend(Guidedog.templates.guidedog(gd.data, {}));
      compileJade();
      $('.guidedog').each(function(){ $(this).css('background', '#'+Math.floor(Math.random()*16777215).toString(16)); });
      syntaxHighlight();
      updateNav();
      scrollToClick();
      initTabs();
      $(document).on('scroll', function(){updateNav();});
      if (typeof callback == 'function') {
        callback.call(gdDOM);
      }
      if(window.location.hash){
        // bug causing this not to work properly in Chrome
        scrollTo(window.location.hash, 0);
      }
    }

    // syntax highlight markup
    var syntaxHighlight = function(){
      Prism.highlightAll();
    }

    // compile jade examples
    var compileJade = function(){
      $('.sg-jade').each(function(){
        // define targets
        var target = $(this)
        var targetJade = target.find('.language-haskell')
        var targetHTML = target.find('.language-markup')
        var targetExample = target.find('.sg-example')

        // capture jade
        var stringJade = targetJade.text();
        stringJade = stringJade.replace(/^\s+|\s+$/g,'')

        // convert to html
        var stringHTML = jade.compile(stringJade, {
          pretty: true
        })()

        // render html example
        targetExample.html(stringHTML)

        // render html code sample
        targetHTML.text(stringHTML)
      });
    }

    // update active nav item
    var updateNav = function(){
      var found = false;
      var windowScrollTop = $(window).scrollTop();
      var windowScrollBottom = $(window).height() + windowScrollTop;
      $('section.sg').each(function(){
        if(!found){
          var target = $(this).find('.sg-target');
          var targetScrollTop = target.offset().top;
          if(targetScrollTop >= windowScrollTop && targetScrollTop < windowScrollBottom){
            $('nav.sg a.active').removeClass('active');
            $('nav.sg a[href="#'+target.attr('name')+'"]').addClass('active');
            found = true;
          }
        }
      });
    }

    // scrollToClick nav items
    var scrollToClick = function(){
      $('nav.sg').on('click', 'a', function(e){
        e.preventDefault();
        window.history.pushState('', '', $(this).attr('href'));
        scrollTo($(this).attr('href'), 1000);
      });
    }

    // scrollTo nav items
    var scrollTo = function(target, speed){
        if($(target)[0]){
          $('html,body').animate({
            scrollTop: $(target).offset().top - 30
          }, speed);
        }
    }

    // fetch the index of a section
    var sectionIndex = function(match){
      for (var i=0; i<gd.data.sections.length; i++){
        if(gd.data.sections[i].section === match){
          return i
        }
      }
      return 0
    }

    // determine if a section already exists
    var new_section = function(section){
      for (key in gd.data.sections){
        if(section === gd.data.sections[key].section){
          return false
        }
      }
      return true
    }

    // init sg-tabs
    var initTabs = function(){
      $('body').on('click', '.sg-tabs-trigger li', function(){
        var target = $(this)
        var root = target.closest('.sg-tabs')
        var index = target.index();
        root.find('.sg-tabs-active').removeClass('sg-tabs-active')
        target.addClass('sg-tabs-active')
        root.find('.sg-tabs-content li:nth-child('+(index+1)+')').addClass('sg-tabs-active')
      });
    }
  }
}(jQuery));
