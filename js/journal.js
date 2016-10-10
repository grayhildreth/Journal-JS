var vowels = ["a", "e", "i", "o", "u"];

function Journal(title, body) {
  this.titleEntry = title;
  this.bodyEntry = body;
}

Journal.prototype.wordCount = function(titleEntry) {
  var wordNumber = this.titleEntry.toLowerCase().split(" ");
  return wordNumber.length;
};

Journal.prototype.vowelCount = function() {
  var vowelArray = [];
  var vowelSeperate = this.titleEntry.split("");
  for (var i = 1; i <= vowelSeperate.length; i++) {
    if (vowels.includes(vowelSeperate[i])) {
      vowelArray.push(vowelSeperate[i]);
    }
  }
  return vowelArray.length;
};

exports.journalModule = Journal;
