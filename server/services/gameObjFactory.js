const kickoffReturnYdsService = require('./kickoffReturnYdsService');
const fumblesService = require('./fumblesService');
const puntReturnYdsService = require('./puntReturnYdsService');

const gameObjFactory = {
  buildGameObj: function (gameObj, teamAPlayers, teamBPlayers) {
    // get total number of kickoff return yds 
    gameObj.teamAKickoffReturnYds = kickoffReturnYdsService.getTotalForAllPlayers(teamAPlayers);
    gameObj.teamBKickoffReturnYds = kickoffReturnYdsService.getTotalForAllPlayers(teamBPlayers);
  
    // get total number of fumbles
    gameObj.teamAFumbles = fumblesService.getTotalForAllPlayers(teamAPlayers);
    gameObj.teamBFumbles = fumblesService.getTotalForAllPlayers(teamBPlayers);
    
    // put other stats on gameObj here...
    gameObj.teamAPuntReturnYds = puntReturnYdsService.getTotalForAllPlayers(teamAPlayers);
    gameObj.teamBPuntReturnYds = puntReturnYdsService.getTotalForAllPlayers(teamBPlayers);
    
    return gameObj;
  }
};

module.exports = gameObjFactory;