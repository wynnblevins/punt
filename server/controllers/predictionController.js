const bodyParser = require("body-parser");
const axios = require('axios');
const predictionService = require('../services/predictionService');

module.exports = function (app) {
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());    

  app.get('/api/prediction/teamA/:teamAId/teamB/:teamBId', (req, res) => {    
    let teamAId = req.params.teamAId;
    let teamBId = req.params.teamBId;
    
    predictionService.predict(teamAId, teamBId).then((data) => {
      res.send(data);
    });
  });
};