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
