const getTotalForAllPlayers = require('./gameStatSumService');
const getHighestValueForTeam = require('./highestValueService');
const getAverage = require('./teamAverageService');

const gameObjFactory = {
  buildGameObj: function (gameObj, teamAPlayers, teamBPlayers) {
    // get total number of kickoff return yds 
    gameObj.teamAKickoffReturnYds = getTotalForAllPlayers(teamAPlayers, 'KrYds');
    gameObj.teamBKickoffReturnYds = getTotalForAllPlayers(teamBPlayers, 'KrYds');
  
    // get total number of fumbles
    gameObj.teamAFumbles = getTotalForAllPlayers(teamAPlayers, 'FumTD');
    gameObj.teamBFumbles = getTotalForAllPlayers(teamBPlayers, 'FumTD');
    
    // get total number of punt return yds...
    gameObj.teamAPuntReturnYds = getTotalForAllPlayers(teamAPlayers, 'PrYds');
    gameObj.teamBPuntReturnYds = getTotalForAllPlayers(teamBPlayers, 'PrYds');

    // get total number of interceptions...
    gameObj.teamAInterceptions = getTotalForAllPlayers(teamAPlayers, 'IntTD');
    gameObj.teamBInterceptions = getTotalForAllPlayers(teamBPlayers, 'IntTD');

    // get total number of pass yards
    gameObj.teamAPassYards = getTotalForAllPlayers(teamAPlayers, 'PassYards');
    gameObj.teamBPassYards = getTotalForAllPlayers(teamBPlayers, 'PassYards');

    // get total number of rush yds
    gameObj.teamARushYds = getTotalForAllPlayers(teamAPlayers, 'RushYards');
    gameObj.teamBRushYds = getTotalForAllPlayers(teamBPlayers, 'RushYards');

    // get total number of rush attempts
    gameObj.teamARushAttempts = getTotalForAllPlayers(teamAPlayers, 'RushAttempts');
    gameObj.teamBRushAttempts = getTotalForAllPlayers(teamBPlayers, 'RushAttempts');

    // get the best qb rating for both teams
    gameObj.teamAQbRating = getHighestValueForTeam(teamAPlayers, 'QBRating');
    gameObj.teamBQbRating = getHighestValueForTeam(teamBPlayers, 'QBRating');

    // get average num of tackles for teams
    gameObj.teamAAverageTackleTotal = getAverage(teamAPlayers, 'TackleTotal');
    gameObj.teamBAverageTackleTotal = getAverage(teamBPlayers, 'TackleTotal');

    return gameObj;
  }
};

module.exports = gameObjFactory;