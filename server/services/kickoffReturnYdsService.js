const kickoffReturnYdsService = {
  // takes all the players on a team and returns total kickoff return yards for that team
  getTotalForAllPlayers: function (players) {
    let totalReturnYds = 0;
    let currKickoffReturnYds = 0;

    for (var i = 0; i < players.length; i++) {
      if (players[i].stats) {
        currKickoffReturnYds = players[i].stats.KrYds['#text']
        totalReturnYds += parseInt(currKickoffReturnYds);
      }
    }

    return totalReturnYds;
  }
};

module.exports = kickoffReturnYdsService;