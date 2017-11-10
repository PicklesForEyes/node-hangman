var Letter = require('./letter.js');

function Word(input){
  this.value = input;
  this.letters = new Letter(input);
}

module.exports = Word;