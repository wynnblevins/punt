const interceptionsService = {
  getTotalForAllPlayers: function (players) {
    let totalInterceptions = 0;
    let currInterceptions = 0;

    for (var i = 0; i < players.length; i++) {
      if (players[i].stats && players[i].stats.IntTD) {
        currInterceptions = players[i].stats.IntTD['#text'];
        currInterceptions = parseInt(currInterceptions);    
        totalInterceptions += currInterceptions;
      }
    }

    return totalInterceptions;
  }
};

module.exports = interceptionsService;