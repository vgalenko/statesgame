'use strict';

// declare global variables.
var inputBox = document.getElementById('input');
var startButton = document.getElementById('start-btn');
var highScore = document.getElementById('high-score');

// if localStorage.savedArray exists, parse that into the scoresArray variable.
if (localStorage.savedArray) {
  var scoresArray = JSON.parse(localStorage.savedArray);
} else {
  // otherwise, create an empty array.
  var scoresArray = [];
  saveArray();
}

// constructor function for new user object
function NewUserObject(name) {
  this.name = name;
  this.score = 0;
}

// starts game. pulls name from input box and creates user object, saves that
// to localStorage and then clears the input box.
function saveUser() {
  var tempUser = new NewUserObject(inputBox.value);
  localStorage.savedUser =  JSON.stringify(tempUser);
}

// saves scoresArray to localStorage
function saveArray() {
  localStorage.savedArray =  JSON.stringify(scoresArray);
}

// loads scoresArray from localStorage
function loadArray() {
  scoresArray = JSON.parse(localStorage.savedArray);
}

// sorts scores and returns top ten sorted
function sortScores() {
  scoresArray.sort(function (a, b) {
    return b.score - a.score;
  });
  scoresArray = scoresArray.slice(0,10);
}


// function to loop through scoresArray, insert each index into an <li></li> and
// then insert the list into the highScore element.
function renderHighScores() {
  // loop through scoresArray once for each index
  for (var i = 0; i < scoresArray.length; i++) {
    // create a <li></li> in memory
    var listItem = document.createElement('li');
    // insert each array index into the <li></li> in memory
    listItem.innerHTML = scoresArray[i].name +  ' ....... ' + scoresArray[i].score ;
    // insert the <li></li> into the highScore element
    highScore.appendChild(listItem);
  }
  // reset input box value to empty
  inputBox.value = '';
}

sortScores();
renderHighScores();

// listen for click on the startButton element and run startGame function
startButton.addEventListener('click', startGame);

function startGame() {
  if (inputBox.value === '') {
    inputBox.value = '___';
  }
  saveUser();
}

function updateScoresArray() {
  scoresArray.push(JSON.parse(localStorage.savedUser));
}

// pulls savedUser data from localStorage and increments score by 1, then resaves the data.
function incrementScore() {
  var tempUser = JSON.parse(localStorage.getItem('savedUser'));
  tempUser.score += 1;
  localStorage.setItem('savedUser', JSON.stringify(tempUser));
}

function endGame() {
  window.location.href = 'end.html';
  saveArray();
}
