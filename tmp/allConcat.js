var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#title-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var titleOutput = new Journal(title, body);
    var word_result = titleOutput.wordCount();
    var vowel_result = titleOutput.vowelCount();
    console.log(vowel_result);
    console.log(word_result);
  });
});
