var statesVar = ['alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'newhampshire', 'newjersey', 'newmexico', 'newyork', 'northcarolina', 'northdakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'rhodeisland', 'southcarolina', 'southdakota', 'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'westvirginia', 'wisconsin', 'wyoming'];

var statesName = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'Northdakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhodeisland', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

var shuffledStates = ['alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'newhampshire', 'newjersey', 'newmexico', 'newyork', 'northcarolina', 'northdakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'rhodeisland', 'southcarolina', 'southdakota', 'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'westvirginia', 'wisconsin', 'wyoming'];

function States(statesVar, stateName) {
  this.statesVar = statesVar;
  this.statesName = stateName;
  this.asked = false;
}

function instantiateStateObj() {
  for (var i = 0; i < statesVar.length; i++) {
    statesObj.push(new States(statesVar[i], statesName[i]));
  }
}

var statesObj = [];

var index = 0;
var populateHeader = document.getElementById('populate-header');

var answer;
var clicked;

function askQuestion() {
  answer = shuffledStates[index];
  populateHeader.innerHTML = shuffledStates[index];
}

for (var i = 0; i < statesVar.length; i++) {
  document.getElementById(statesVar[i]).addEventListener('click',
    function() {
      verify(answer, this.id);
    }
  );
}

function verify(answer, clicked) {
  console.log('answer is', answer);
  console.log('clicked is', clicked);

  if (answer === clicked) {
    console.log('this works');
  } else {
    console.log('loser');
  }
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
  askQuestion();
}

launchGame();
