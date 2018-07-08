const kickoffReturnYdsService = require('./kickoffReturnYdsService');
const fumblesService = require('./fumblesService');
const puntReturnYdsService = require('./puntReturnYdsService');
const passYdsService = require('./passYardsService');
const interceptionsService = require('./interceptionsService');

const gameObjFactory = {
  buildGameObj: function (gameObj, teamAPlayers, teamBPlayers) {
    // get total number of kickoff return yds 
    gameObj.teamAKickoffReturnYds = kickoffReturnYdsService.getTotalForAllPlayers(teamAPlayers);
    gameObj.teamBKickoffReturnYds = kickoffReturnYdsService.getTotalForAllPlayers(teamBPlayers);
  
    // get total number of fumbles
    gameObj.teamAFumbles = fumblesService.getTotalForAllPlayers(teamAPlayers);
    gameObj.teamBFumbles = fumblesService.getTotalForAllPlayers(teamBPlayers);
    
    // get total punt return yards
    gameObj.teamAPuntReturnYds = puntReturnYdsService.getTotalForAllPlayers(teamAPlayers);
    gameObj.teamBPuntReturnYds = puntReturnYdsService.getTotalForAllPlayers(teamBPlayers);
    
    // get total number of pass yards
    gameObj.teamAPassYds = passYdsService.getTotalForAllPlayers(teamAPlayers);    
    gameObj.teamBPassYds = passYdsService.getTotalForAllPlayers(teamBPlayers);

    // get total number of interceptions
    gameObj.teamAInterceptions = interceptionsService.getTotalForAllPlayers(teamAPlayers);
    gameObj.teamBInterceptions = interceptionsService.getTotalForAllPlayers(teamBPlayers);

    return gameObj;
  }
};

module.exports = gameObjFactory;