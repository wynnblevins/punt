const bodyParser = require("body-parser");
const axios = require('axios');
const predictionService = require('../services/predictionService');

module.exports = function (app) {
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());    

  app.get('/api/prediction/teamA/:teamAId/teamB/:teamBId', (req, res) => {    
    let seasonDataArray = [];

    let seasons = [
      '2017-regular',
      '2016-regular',
      '2015-regular',
      '2014-regular'
    ];
    
    let teamAId = req.params.teamAId;
    let teamBId = req.params.teamBId;
    let teamIds = [];
    teamIds.push(teamAId);
    teamIds.push(teamBId);
    let teamId = null;
    let promises = [];

    // this loop should only run twice as there are only two teams at the same time
    for (let j = 0; j < teamIds.length; j++) {
      // which team are we dealing with
      if (j === 0) {
        // its team A
        teamId = teamAId;
      } else {
        // its team B
        teamId = teamBId;
      }

      for (let i = 0; i < seasons.length; i++) {
        let sportsFeedUrl = `https://api.mysportsfeeds.com/v1.2/pull/nfl/${seasons[i]}/cumulative_player_stats.json?playerstats=Att,Comp,Yds,TD&team=${teamId}`;
        let creds = Buffer.from(`wynnblevins:Nowuckinfurries3612`).toString('base64');
    
        let authValue = `Basic ${creds}`;
    
        promises.push(axios({
          method: 'GET',
          url: sportsFeedUrl,
          headers: {
            'Authorization': authValue
          }
        }).catch(function(thrown) {  
          console.error('thrown: ' + thrown);
        }));
      }
      
      // get game winner/loser for the times the two teams met
      for (let i = 0; i < seasons.length; i++) {
        let sportsFeedUrl = `https://api.mysportsfeeds.com/v1.2/pull/nfl/${seasons[i]}/cumulative_player_stats.json?playerstats=Att,Comp,Yds,TD&team=${teamId}`;
        let creds = Buffer.from(`wynnblevins:Nowuckinfurries3612`).toString('base64');
        let authValue = `Basic ${creds}`;
    
        promises.push(axios({
          method: 'GET',
          url: sportsFeedUrl,
          headers: {
            'Authorization': authValue
          }
        }).catch(function(thrown) {  
          console.error('thrown: ' + thrown);
        }));
      }
    } 
    
    axios.all(promises).then(function(results) {
      // for the data of each season
      for (var i = 0; i < results.length; i++) {
        // get the season string from the current result
        let thirdSlashNdx = getPosition(results[i].request.path, '/', 4) + 1; // add 1 to account for /    
        let fourthSlashNdx = getPosition(results[i].request.path, '/', 5);
        let seasonStr = results[i].request.path.substring(thirdSlashNdx, fourthSlashNdx);
        
        // create a season obj
        let seasonObj = { 
          season: seasonStr,
          totalRecYds: parseAllRecYards(results[i].data)  
        };
    
        seasonDataArray.push(seasonObj);
      }

      let predictedClass = predictionService.predict(seasonDataArray);
      return predictedClass;
    });
  });
};