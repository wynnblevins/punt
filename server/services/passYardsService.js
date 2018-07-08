const passYardsService = {
  getTotalForAllPlayers: function (players) {
    let totalPassYds = 0;
    for (let i = 0; i < players.length; i++) {
      if (players[i].stats && players[i].stats.PassYards && 
        players[i].stats.PassYards['#text']) {
        totalPassYds += parseInt(players[i].stats.PassYards['#text']);
      }
    }
    return totalPassYds;
  }
};

module.exports = passYardsService;