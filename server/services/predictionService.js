const DecisionTree = require('decision-tree');
const axios = require('axios');
const seasonIdService = require('./seasonIdService.js');
const seasonScheduleService = require('./seasonScheduleService.js');
const gameIdService = require('./gameIdService.js');
const teamService = require('./teamService.js');
const gameWinnerService = require('./gameWinnerService.js');
const kickoffReturnYdsService = require('./kickoffReturnYdsService.js');
const fumblesService = require('./fumblesService.js');
const puntReturnYdsService = require('./puntReturnYdsService.js');

function requestSeasonSchedules() {
  let seasonSchedulePromises = [];
  let seasonIds = seasonIdService.getSeasonIds();
 
  return new Promise((resolve) => {
    // with season ID strings, request season schedule
    for (let i = 0; i < seasonIds.length; i++) {
      let schedulePromise = seasonScheduleService.getSeasonSchedule(seasonIds[i]);
      seasonSchedulePromises.push(schedulePromise);
    }

    axios.all(seasonSchedulePromises).then((data) => {
      resolve(data)
    });
  });
}

function runDecisionTree(data) {
  let game = null;
  let gameHistory = [];

  for (let i = 0; i < data.length; i++) {
    game = data[i];
    
    // if team A is the home team
    if (game.teamAAbbr === game.homeTeamAbbr) {
      // and team A is the winner  
      if (game.homeScore > game.awayScore) {
        game.teamAWins = true;
      }
      else {
        game.teamAWins = false;
      }
    } else if (game.teamBAbbr === game.homeTeamAbbr) {
      // else if team b is the home team
      // ...and team A is the winner  
      if (game.homeScore < game.awayScore) {
        game.teamAWins = true;
      }
      else {
        game.teamAWins = false;
      }
    } 
    else {
      console.error('ended up in else of prediction service data trainer. (we shouldnt have)');
      game.teamAWins = false;
    }

    gameHistory.push(game);
  }

  let className = 'teamAWins'; 
  let features = [
    'teamAKickoffReturnYds',
    'teamBKickoffReturnYds',
    'teamAFumbles',
    'teamBFumbles',
    'teamAPuntReturnYds',
    'teamBPuntReturnYds'
  ];

  let dt = new DecisionTree(gameHistory, className, features);
  let predictedClass = dt.predict({
    teamAKickoffReturnYds: gameHistory.teamAKickoffReturnYds,
    teamBKickoffReturnYds: gameHistory.teamBKickoffReturnYds,
    teamAPuntReturnYds: gameHistory.teamAPuntReturnYds,
    teamBPuntReturnYds: gameHistory.teamBPuntReturnYds,
    teamAFumbles: gameHistory.teamAFumbles,
    teamBFumbles: gameHistory.teamBFumbles
  });

  return predictedClass;
}

const predictionService = {  
  predict: function (teamAId, teamBId) {
    let winnerPromises = [];
    let teamA = teamService.getTeamById(teamAId);
    let teamB = teamService.getTeamById(teamBId);
    
    let predictionPromise = new Promise((resolve, reject) => {
      let seasonStr = null;

      // train the decision tree
      requestSeasonSchedules().then((responses) => {
        
        // for each season's worth of data 
        for (let i = 0; i < responses.length; i++) {
          
          // TODO: refactor this HORRIBLE switch out of your code
          switch (i) {
            case 0:
            seasonStr = seasonIdService.getSeasonIds()[0];
            break;
            case 1:
            seasonStr = seasonIdService.getSeasonIds()[1];
            break;
            case 2: 
            seasonStr = seasonIdService.getSeasonIds()[2];  
            break;
            case 3:
            seasonStr = seasonIdService.getSeasonIds()[3];  
            break;
          }

          let seasonResponse = responses[i].data;
          let games = seasonResponse.fullgameschedule.gameentry;

          // loop through the games that were played
          for (let j = 0; j < games.length; j++) {
            let game = games[j];
            let homeTeamId = parseInt(game.homeTeam.ID);
            let awayTeamId = parseInt(game.awayTeam.ID);
            var gameId = null;
            let teamA = teamService.getTeamById(teamAId);
            let teamB = teamService.getTeamById(teamBId);
            
            if (homeTeamId === teamAId && awayTeamId === teamBId) {
              // if the game we're currently on is 
              // a teamA home game and teamB away game
              // get the correct game ids 
              let homeTeam = teamA; 
              let awayTeam = teamB;
              let gameDate = game.date;

              gameId = gameIdService.formGameId(gameDate, homeTeam.abbreviation, awayTeam.abbreviation);
            } else if (awayTeamId === teamA.id && homeTeamId === teamB.id) {
              // if the game we're currently on is 
              // a teamB home game and teamA away game
              // get the correct game ids
              let homeTeam = teamB; 
              let awayTeam = teamA;
              let gameDate = game.date;

              gameId = gameIdService.formGameId(gameDate, homeTeam.abbreviation, awayTeam.abbreviation);
            }
            
            // if we found a game we want to use for training
            if (gameId) {
              // putting the gameId inside of gameIdStore because of async code problems
              let gameIdStore = gameId;
              winnerPromises.push(new Promise((resolve, reject) => {
                gameWinnerService.requestWinner(gameId, seasonStr)
                .then(function (gameData) {
                  resolve({
                    id: gameIdStore, 
                    gameData: gameData
                  });
                });
              }));
            }
          }
        }
        
        axios.all(winnerPromises).then(function (gamesData) {
          let parsedGameObjs = [];
          
          // loop through the data and put statistics about the two teams on the game obj
          for (var i = 0; i < gamesData.length; i++) {
            let currGameData = gamesData[i];
            let gameObj = gameIdService.parseGameId(currGameData.id)
            let awayScore = parseInt(currGameData.gameData.gameboxscore.quarterSummary.quarterTotals.awayScore);
            let homeScore = parseInt(currGameData.gameData.gameboxscore.quarterSummary.quarterTotals.homeScore);
            gameObj.homeScore = homeScore;
            gameObj.awayScore = awayScore;
            gameObj.preParsedGameId = gamesData[i].id;
            
            let teamAPlayers = null;
            let teamBPlayers = null;

            // check if team A is the home team
            if (gameObj.homeTeamAbbr === teamA.abbr) {
              gameObj.teamAAbbr = gameObj.homeTeamAbbr;
              gameObj.teamBAbbr = gameObj.awayTeamAbbr;
              teamAPlayers = gamesData[i].gameData.gameboxscore.homeTeam.homePlayers.playerEntry;
              teamBPlayers = gamesData[i].gameData.gameboxscore.awayTeam.awayPlayers.playerEntry;
            } else { 
              gameObj.teamBAbbr = gameObj.homeTeamAbbr;
              gameObj.teamAAbbr = gameObj.awayTeamAbbr;
              
              teamAPlayers = gamesData[i].gameData.gameboxscore.awayTeam.awayPlayers.playerEntry;
              teamBPlayers = gamesData[i].gameData.gameboxscore.homeTeam.homePlayers.playerEntry;
            }
            
            // get total number of kickoff return yds 
            gameObj.teamAKickoffReturnYds = kickoffReturnYdsService.getTotalForAllPlayers(teamAPlayers);
            gameObj.teamBKickoffReturnYds = kickoffReturnYdsService.getTotalForAllPlayers(teamBPlayers);
          
            // get total number of fumbles
            gameObj.teamAFumbles = fumblesService.getTotalForAllPlayers(teamAPlayers);
            gameObj.teamBFumbles = fumblesService.getTotalForAllPlayers(teamBPlayers);
            
            // put other stats on gameObj here...
            gameObj.teamAPuntReturnYds = puntReturnYdsService.getTotalForAllPlayers(teamAPlayers);
            gameObj.teamBPuntReturnYds = puntReturnYdsService.getTotalForAllPlayers(teamBPlayers);  

            parsedGameObjs.push(gameObj);
          }       

          var prediction = runDecisionTree(parsedGameObjs);
          resolve(prediction);
        });
      });
    });

    return predictionPromise; 
  }
};

module.exports = predictionService;