const getAverage = function (players, stat) {
  let sum = 0;

  if (players.length === 0) {
    throw `Error: no players on provided team.  
      Cannot get average ${stat} for team`;
  }
  else {
    for (let i = 0; i < players.length; i++) {
      if (players[i].stats && players[i].stats[stat]) {
        sum += parseInt(players[i].stats[stat]['#text']);
      }
    }
  }  

  return sum / players.length;
}

module.exports = getAverage;