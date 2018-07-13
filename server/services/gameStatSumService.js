module.exports = function (players, stat) {
  let total = 0;
  
  for (var i = 0; i < players.length; i++) {
    if (players[i].stats && players[i].stats[stat]) {
      total += parseInt(players[i].stats[stat]['#text']);
    }
  }

  return total;
};