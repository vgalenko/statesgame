var displayStatsLineOne = document.getElementById('display-stats-line-one');
var displayStatsLineTwo = document.getElementById('display-stats-line-two');

function appendStats() {
  var user = JSON.parse(localStorage.savedUser);
  displayStatsLineOne.innerHTML = user.name + ', you got ' + user.score + ' out of 10 states correct!';
  displayStatsLineTwo.innerHTML = 'Can you do better?';
}

appendStats();
