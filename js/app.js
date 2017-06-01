'use strict';

// declare global variables.
var inputBox = document.getElementById('input');
var startButton = document.getElementById('start-btn');
var highScore = document.getElementById('high-score');

var scoresArray = [
  { name: 'Daffy', score: 15 },
  { name: 'Daisy', score: 13 },
  { name: 'Donald', score: 6 },
  { name: 'Scrooge', score: 8 },
  { name: 'Plucky', score: 11 },
  { name: 'Howard', score: 7 },
  { name: 'Ferdinand', score: 10 },
  { name: 'Ludwig Von Drake', score: 17 },
  { name: 'Orville', score: 9 },
  { name: 'Launchpad', score: 9 }
];

saveArray();


//if localStorage.savedArray exists, parse that into the scoresArray variable.
// if (localStorage.savedArray) {
//   var scoresArray = JSON.parse(localStorage.getItem('savedArray'));
// } else {
//   // otherwise, create an empty array.
//   var scoresArray = [];
// }

// constructor function for new user object
function NewUserObject(name) {
  this.name = name;
  this.score = 0;
}

// sorts input array of user objects by score property
function sortArray(inputArray) {
  // sort array by score property
  inputArray.sort(function (a, b) {
    return b.score - a.score;
  });
  // return sorted array
  return inputArray.sort();
}

// saves scoresArray to localStorage
function saveArray() {
  localStorage.savedArray =  JSON.stringify(scoresArray);
}

// loads scoresArray from localStorage
function loadArray() {
  scoresArray = JSON.parse(localStorage.savedArray);
}


// function to loop through scoresArray, insert each index into an <li></li> and
// then insert the list into the highScore element.
function renderHighScores() {
  // loop through scoresArray once for each index
  for (var i = 0; i < scoresArray.length; i++) {
    // create a <li></li> in memory
    var listItem = document.createElement('li');
    // insert each array index into the <li></li> in memory
    listItem.innerHTML = scoresArray[i].score + ' : ' + scoresArray[i].name;
    // insert the <li></li> into the highScore element
    highScore.appendChild(listItem);
  }
  // reset input box value to empty
  inputBox.value = '';
}

sortArray(scoresArray);
renderHighScores();

// dummy function that returns the user object from localStorage
// function gameLogic() {
//   var temp = new NewUserObject('George');
//   temp.score = 10;
//   return temp;
// }

// listen for click on the startButton element and run startGame function
startButton.addEventListener('click', startGame);

function startGame() {
  if (inputBox.value === '') {
    inputBox.value = 'NO NAME';
    saveUser();
  }
}

// starts game. pulls name from input box and creates user object, saves that
// to localStorage and then clears the input box.
function saveUser() {
  var tempUser = new NewUserObject(inputBox.value);
  localStorage.setItem('savedUser', JSON.stringify(tempUser));
  // function to run game logic from Jonah
  // gameLogic();
}



// pulls savedUser data from localStorage and increments score by 1,
// then resaves the data.
function incrementScore() {
  var tempUser = JSON.parse(localStorage.getItem('savedUser'));
  tempUser.score += 1;
  localStorage.setItem('savedUser', JSON.stringify(tempUser));
}

function endGame() {
  window.location.href = 'end.html';
  saveArray();
}
