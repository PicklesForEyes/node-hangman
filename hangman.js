var arr = require('./constructors/arr.js');
var inq = require('inquirer');
var currentWord;
var guessedLetters = [];
var guessesLeft = 15;
var word;


function game() {
  var num = Math.floor(Math.random() * arr.length)
  word = arr[num];

  hideLetters(word);
}


function hideLetters(obj) {
  if(!guessesLeft) {
    endGame(false);
  }
  var tempArr = [];
  currentWord = obj.value
  console.log(obj.value)
  for(var i = 0; i < obj.letters.arr.length; i++) {
    if(obj.letters.arr[i] === ' ' || guessedLetters.indexOf(obj.letters.arr[i]) > -1) {
      tempArr.push(obj.letters.arr[i]);
    }  else {
      tempArr.push('_');
    }
  }
  if(tempArr.indexOf('_') < 0) {
    endGame(true);
  } else {
    console.log(tempArr.join(' '))
    userInput();
  }
}


function userInput() {
  inq.prompt([
    {
      type: 'input',
      message: 'Guess a letter!',
      name: 'letter'
    }
  ]).then(function(response) {
    console.log(response.letter)
    guessThatLetter(response.letter);
  })
}


function guessThatLetter(userGuess) {
  if(guessedLetters.indexOf(userGuess) > -1) {
    console.log('That has already been guessed');
    userInput();
  } else if (currentWord.indexOf(userGuess) < 0){
    guessesLeft--;
  }
  guessedLetters.push(userGuess);
  hideLetters(word);
}


function endGame(bool) {
  if(bool) {
    console.log('Yay! You guessed the word!');
  } else {
    console.log('Dang, you lost. Better luck next time!')
  }
  guessedLetters = [];
  inq.prompt([
    {
      type: 'confirm',
      message: 'Would you like play again?',
      name: 'confirm'
    }
  ]).then(function(result) {
    if(result.confirm) {
      console.log('Here we go!');
      game();
    } else {
      console.log('Goodbye!')
    }
  })
}

game();