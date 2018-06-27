const moment = require('moment');
const ndxsService = require('./ndxsService.js');

const gameIdService = {
  formGameId: function (gameDateStr, homeTeamAbbr, awayTeamAbbr) {
    let gameDateMoment = moment(gameDateStr, 'YYYY-MM-DD');
    let formattedGameDateStr = gameDateMoment.format('YYYYMMDD');
    let gameId = formattedGameDateStr + '-' + awayTeamAbbr  + '-' + homeTeamAbbr;
    return gameId;  
  },

  parseGameId: function (gameId) {
    let re = /([0-9]{8})-([A-Z]{2,3})-([A-Z]{2,3})/
    let matchesArr = gameId.match(re);
    let ndxs = ndxsService.getGameNdxsObj();
    
    let gameObj = {
      id: matchesArr[ndxs.gameId],
      homeTeamAbbr: matchesArr[ndxs.homeTeamAbbr],
      awayTeamAbbr: matchesArr[ndxs.awayTeamAbbr]
    };
    
    return gameObj;
  },

  getHomeTeam: function (gameId) {
    let re = /([0-9]{8})-([A-Z]{2})-([A-Z]{2})/
    let matchesArr = gameId.match(re);
    let ndxs = ndxsService.getGameNdxsObj();
    return matchesArr[ndxs.homeTeamAbbr];
  },

  getAwayTeam: function (gameId) {
    let re = /([0-9]{8})-([A-Z]{2})-([A-Z]{2})/
    let matchesArr = gameId.match(re);
    let ndxs = ndxsService.getGameNdxsObj();
    return matchesArr[ndxs.awayTeamAbbr];
  }
};

module.exports = gameIdService;