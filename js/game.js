var states = ['alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'newhampshire', 'newjersey', 'newmexico', 'newyork', 'northcarolina', 'northdakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'rhodeisland', 'southcarolina', 'southdakota', 'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'westvirginia', 'wisconsin', 'wyoming'];

var statesObj = [];

function States(name) {
  this.name = name;
  this.shown = false;
}

function instantiateStateObj() {
  for (var i = 0; i < states.length; i++) {
    statesObj.push(new States(states[i]));
  }
}
//
// States.prototype.getName = function() {
//   console.log(this.element.id);
// };

// function generic() {
//   console.log('generic');
// }
//
// var map = new Map();
// map.populateMap = statesObj;
// map.instantiatedStates = instantiateStateObj(states);

/* * * * * * * * * * * * * * * * * * * * * * * * * *
    Fisher-Yates Shuffle Explained by Adam Khoury
    https://www.youtube.com/watch?v=tLxBwSL3lPQ
* * * * * * * * * * * * * * * * * * * * * * * * * * */

Array.prototype.shuffle = function() {
  var i = this.length;
  var j; // our random number we generate
  var temp; // holds temporary value so we can swap between indices

  while(--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[j];
    this[j] = this[i]; // swaps position with whatever is in the random position
    this[i] = temp; // target index position and put temp value in
  }
  return this;
};


// need to be able to grab the id.
// need to attach an event listener.
// Each time you click it will tell you if it's right or wrong.
// when the right answer is clicked, it will go to the next state.

var washington = document.getElementById('washington');
washington.addEventListener('click', genericWA);

function genericWA() {
  statesObj[states.indexOf(washington.id)];
}


// appends state name to DOM
var populateHeader = document.getElementById('populate-header');

function askQuestion(stateName) {
  populateHeader.innerHTML = stateName;
}


function launchGame() {
  instantiateStateObj();
}

launchGame();
