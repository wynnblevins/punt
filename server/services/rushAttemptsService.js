const rushAttemptsService = {
  getTotalForAllPlayers: function (players) {
    let rushAttempts = 0;
    let currRushAttempts = 0;

    for (let i = 0; i < players.length; i++) {
      if (players[i].stats && players[i].stats.RushAttempts) {
        currRushAttempts = players[i].stats.RushAttempts['#text'];
        rushAttempts += parseInt(currRushAttempts);
      }
    }

    return rushAttempts;
  }
};

module.exports = rushAttemptsService;