const interceptionsService = {
  getInterceptionsTotalForPlayers: function (players) {
    let totalInterceptions = 0;
    
    for (var i = 0; i < players.length; i++) {
      if (players[i].stats) {
        totalInterceptions += parseInt(players[i].stats.IntTD['#text']);
      }
    }

    return totalInterceptions;
  }
};

module.exports = interceptionsService;