const ndxsService = {
  getGameNdxsObj: function () {
    const ndxs = {
      preParsedStr: 0,
      gameId: 1,
      homeTeamAbbr: 3,
      awayTeamAbbr: 2
    };
    return ndxs;
  }
}

module.exports = ndxsService;