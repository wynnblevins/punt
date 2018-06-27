const ndxsService = {
  getGameNdxsObj: function () {
    const ndxs = {
      preParsedStr: 0,
      gameId: 1,
      homeTeamAbbr: 2,
      awayTeamAbbr: 3
    };
    return ndxs;
  }
}

module.exports = ndxsService;