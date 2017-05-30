var states = ['alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'newhampshire', 'newjersey', 'newmexico', 'newyork', 'northcarolina', 'northdakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'rhodeisland', 'southcarolina', 'southdakota', 'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'westvirginia', 'wisconsin', 'wyoming'];

var shuffledStates = ['alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'newhampshire', 'newjersey', 'newmexico', 'newyork', 'northcarolina', 'northdakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'rhodeisland', 'southcarolina', 'southdakota', 'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'westvirginia', 'wisconsin', 'wyoming'];

var statesObj = [];
var clickedState;

function States(name) {
  this.name = name;
  this.shown = false;
}

function instantiateStateObj() {
  for (var i = 0; i < states.length; i++) {
    statesObj.push(new States(states[i]));
  }
}


// Each time you click it will tell you if it's right or wrong.
// when the right answer is clicked, it will go to the next state.

document.getElementById('alabama').addEventListener('click', getName);
document.getElementById('alaska').addEventListener('click', getName);
document.getElementById('arizona').addEventListener('click', getName);
document.getElementById('arkansas').addEventListener('click', getName);
document.getElementById('california').addEventListener('click', getName);
document.getElementById('colorado').addEventListener('click', getName);
document.getElementById('connecticut').addEventListener('click', getName);
document.getElementById('delaware').addEventListener('click', getName);
document.getElementById('florida').addEventListener('click', getName);
document.getElementById('georgia').addEventListener('click', getName);
document.getElementById('hawaii').addEventListener('click', getName);
document.getElementById('idaho').addEventListener('click', getName);
document.getElementById('illinois').addEventListener('click', getName);
document.getElementById('indiana').addEventListener('click', getName);
document.getElementById('iowa').addEventListener('click', getName);
document.getElementById('kansas').addEventListener('click', getName);
document.getElementById('kentucky').addEventListener('click', getName);
document.getElementById('louisiana').addEventListener('click', getName);
document.getElementById('maine').addEventListener('click', getName);
document.getElementById('maryland').addEventListener('click', getName);
document.getElementById('massachusetts').addEventListener('click', getName);
document.getElementById('michigan').addEventListener('click', getName);
document.getElementById('minnesota').addEventListener('click', getName);
document.getElementById('mississippi').addEventListener('click', getName);
document.getElementById('missouri').addEventListener('click', getName);
document.getElementById('montana').addEventListener('click', getName);
document.getElementById('nebraska').addEventListener('click', getName);
document.getElementById('nevada').addEventListener('click', getName);
document.getElementById('newhampshire').addEventListener('click', getName);
document.getElementById('newjersey').addEventListener('click', getName);
document.getElementById('newmexico').addEventListener('click', getName);
document.getElementById('newyork').addEventListener('click', getName);
document.getElementById('northcarolina').addEventListener('click', getName);
document.getElementById('northdakota').addEventListener('click', getName);
document.getElementById('ohio').addEventListener('click', getName);
document.getElementById('oklahoma').addEventListener('click', getName);
document.getElementById('oregon').addEventListener('click', getName);
document.getElementById('pennsylvania').addEventListener('click', getName);
document.getElementById('rhodeisland').addEventListener('click', getName);
document.getElementById('southcarolina').addEventListener('click', getName);
document.getElementById('southdakota').addEventListener('click', getName);
document.getElementById('tennessee').addEventListener('click', getName);
document.getElementById('texas').addEventListener('click', getName);
document.getElementById('utah').addEventListener('click', getName);
document.getElementById('vermont').addEventListener('click', getName);
document.getElementById('virginia').addEventListener('click', getName);
document.getElementById('washington').addEventListener('click', getName);
document.getElementById('westvirginia').addEventListener('click', getName);
document.getElementById('wisconsin').addEventListener('click', getName);
document.getElementById('wyoming').addEventListener('click', getName);

function getName() {
  clickedState = statesObj[states.indexOf(this.id)].name;
  console.log('hey:', clickedState);
}


// appends state name to DOM
var populateHeader = document.getElementById('populate-header');

function askQuestion(stateName) {
  populateHeader.innerHTML = stateName;
}



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

function launchGame() {
  instantiateStateObj();
  shuffledStates.shuffle();
}

launchGame();
