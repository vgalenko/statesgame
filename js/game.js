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

document.getElementById('alabama').addEventListener('click', getClickedState);
document.getElementById('alaska').addEventListener('click', getClickedState);
document.getElementById('arizona').addEventListener('click', getClickedState);
document.getElementById('arkansas').addEventListener('click', getClickedState);
document.getElementById('california').addEventListener('click', getClickedState);
document.getElementById('colorado').addEventListener('click', getClickedState);
document.getElementById('connecticut').addEventListener('click', getClickedState);
document.getElementById('delaware').addEventListener('click', getClickedState);
document.getElementById('florida').addEventListener('click', getClickedState);
document.getElementById('georgia').addEventListener('click', getClickedState);
document.getElementById('hawaii').addEventListener('click', getClickedState);
document.getElementById('idaho').addEventListener('click', getClickedState);
document.getElementById('illinois').addEventListener('click', getClickedState);
document.getElementById('indiana').addEventListener('click', getClickedState);
document.getElementById('iowa').addEventListener('click', getClickedState);
document.getElementById('kansas').addEventListener('click', getClickedState);
document.getElementById('kentucky').addEventListener('click', getClickedState);
document.getElementById('louisiana').addEventListener('click', getClickedState);
document.getElementById('maine').addEventListener('click', getClickedState);
document.getElementById('maryland').addEventListener('click', getClickedState);
document.getElementById('massachusetts').addEventListener('click', getClickedState);
document.getElementById('michigan').addEventListener('click', getClickedState);
document.getElementById('minnesota').addEventListener('click', getClickedState);
document.getElementById('mississippi').addEventListener('click', getClickedState);
document.getElementById('missouri').addEventListener('click', getClickedState);
document.getElementById('montana').addEventListener('click', getClickedState);
document.getElementById('nebraska').addEventListener('click', getClickedState);
document.getElementById('nevada').addEventListener('click', getClickedState);
document.getElementById('newhampshire').addEventListener('click', getClickedState);
document.getElementById('newjersey').addEventListener('click', getClickedState);
document.getElementById('newmexico').addEventListener('click', getClickedState);
document.getElementById('newyork').addEventListener('click', getClickedState);
document.getElementById('northcarolina').addEventListener('click', getClickedState);
document.getElementById('northdakota').addEventListener('click', getClickedState);
document.getElementById('ohio').addEventListener('click', getClickedState);
document.getElementById('oklahoma').addEventListener('click', getClickedState);
document.getElementById('oregon').addEventListener('click', getClickedState);
document.getElementById('pennsylvania').addEventListener('click', getClickedState);
document.getElementById('rhodeisland').addEventListener('click', getClickedState);
document.getElementById('southcarolina').addEventListener('click', getClickedState);
document.getElementById('southdakota').addEventListener('click', getClickedState);
document.getElementById('tennessee').addEventListener('click', getClickedState);
document.getElementById('texas').addEventListener('click', getClickedState);
document.getElementById('utah').addEventListener('click', getClickedState);
document.getElementById('vermont').addEventListener('click', getClickedState);
document.getElementById('virginia').addEventListener('click', getClickedState);
document.getElementById('washington').addEventListener('click', getClickedState);
document.getElementById('westvirginia').addEventListener('click', getClickedState);
document.getElementById('wisconsin').addEventListener('click', getClickedState);
document.getElementById('wyoming').addEventListener('click', getClickedState);

function getClickedState() {
  clickedState = statesObj[states.indexOf(this.id)].name;
  gamePlay();
  console.log('clickedState:', clickedState);
}

// function getAnswerState() {
//   return statesObj[states.indexOf(this.id)].name;
// }

function gamePlay() {
  askQuestion(shuffledStates[0]);
  var answer = shuffledStates[0];

  if (clickedState != null) {
    verify(answer, clickedState);
  }
}

function verify(answer, clickedState) {
  if (answer === clickedState) {
    console.log('win');
  } else {
    console.log('lose');
  }
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
