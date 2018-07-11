const passYardsService = {
  getTotalForAllPlayers: function (players) {
    let totalPassYards = 0;
    
    for (var i = 0; i < players.length; i++) {
      if (players[i].stats && players[i].stats.PassYards) {
        totalPassYards += parseInt(players[i].stats.PassYards['#text']);
      }
    }

    return totalPassYards;
  }
};

module.exports = passYardsService;