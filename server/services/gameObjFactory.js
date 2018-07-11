const kickoffReturnYdsService = require('./kickoffReturnYdsService');
const fumblesService = require('./fumblesService');
const puntReturnYdsService = require('./puntReturnYdsService');
const interceptionsService = require('./interceptionsService');
const passYardsService = require('./passYardsService');

const gameObjFactory = {
  buildGameObj: function (gameObj, teamAPlayers, teamBPlayers) {
    // get total number of kickoff return yds 
    gameObj.teamAKickoffReturnYds = kickoffReturnYdsService.getTotalForAllPlayers(teamAPlayers);
    gameObj.teamBKickoffReturnYds = kickoffReturnYdsService.getTotalForAllPlayers(teamBPlayers);
  
    // get total number of fumbles
    gameObj.teamAFumbles = fumblesService.getTotalForAllPlayers(teamAPlayers);
    gameObj.teamBFumbles = fumblesService.getTotalForAllPlayers(teamBPlayers);
    
    // get total number of punt return yds...
    gameObj.teamAPuntReturnYds = puntReturnYdsService.getTotalForAllPlayers(teamAPlayers);
    gameObj.teamBPuntReturnYds = puntReturnYdsService.getTotalForAllPlayers(teamBPlayers);

    // get total number of interceptions...
    gameObj.teamAInterceptions = interceptionsService.getTotalForAllPlayers(teamAPlayers);
    gameObj.teamBInterceptions = interceptionsService.getTotalForAllPlayers(teamBPlayers);

    // get total number of pass yards
    gameObj.teamAPassYards = passYardsService.getTotalForAllPlayers(teamAPlayers);
    gameObj.teamBPassYards = passYardsService.getTotalForAllPlayers(teamBPlayers);

    return gameObj;
  }
};

module.exports = gameObjFactory;