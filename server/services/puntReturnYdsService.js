const puntReturnYardsService = {
  getTotalForAllPlayers: function (players) {
    let totalPuntReturnYds = 0;
    
    for (var i = 0; i < players.length; i++) {
      if (players[i].stats) {
        totalPuntReturnYds += parseInt(players[i].stats.PrYds['#text']);
      } 
    }

    return totalPuntReturnYds;
  }
}

module.exports = puntReturnYardsService;