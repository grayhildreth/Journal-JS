(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
