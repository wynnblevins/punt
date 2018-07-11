const rushYardsService = {
  getTotalForAllPlayers: function (players) {
    let totalYards = 0;
    
    for (let i = 0; i < players.length; i++) {
      if (players[i].stats && players[i].stats.RushYds) {
        totalYards += parseInt(players[i].stats.RushYds['#text']);
      }
    }

    return totalYards;
  }
};

module.exports = rushYardsService;