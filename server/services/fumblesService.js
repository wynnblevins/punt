const fumblesService = {
  getTotalForAllPlayers: function (players) {
    let totalReturnYds = 0;
    
    for (var i = 0; i < players.length; i++) {
      if (players[i].stats && players[i].stats.FumTD) {
        totalReturnYds += parseInt(players[i].stats.FumTD['#text']);
      }
    }

    return totalReturnYds;
  }
};

module.exports = fumblesService;