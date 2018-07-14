module.exports = function (players, stat) {
  let highestValue = 0;
  let currValue = 0;

  for (var i = 0; i < players.length; i++) {
    if (players[i].stats && players[i].stats[stat]) {
      currValue = parseInt(players[i].stats[stat]['#text']);
      if (currValue > highestValue) {
        highestValue = currValue;
      }
    } 
  }
  
  return highestValue;
};