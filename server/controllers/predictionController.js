const bodyParser = require("body-parser");
const DecisionTree = require('decision-tree');

module.exports = function (app) {
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());    

  app.get('/api/prediction/teamA/:teamAId/teamB/:teamBId', (req, res) => {
    console.log('inside of prediction endpoint');
    console.log('REQUEST: ' + req.body);
    
    let sportsFeedUrl = 'https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/cumulative_player_stats.json?playerstats=Att,Comp,Yds,TD';
		
    axios.get(`/api/creds`).then((credsRes) => {
      axios.get(sportsFeedUrl).then((response) => {
        console.log('inside callback.' + response);
      });
    });
    // var training_data = [
    //   {"color":"blue", "shape":"square", "liked":false},
    //   {"color":"red", "shape":"square", "liked":false},
    //   {"color":"blue", "shape":"circle", "liked":true},
    //   {"color":"red", "shape":"circle", "liked":true},
    //   {"color":"blue", "shape":"hexagon", "liked":false},
    //   {"color":"red", "shape":"hexagon", "liked":false},
    //   {"color":"yellow", "shape":"hexagon", "liked":true},
    //   {"color":"yellow", "shape":"circle", "liked":true}
    // ];

    // var test_data = [
    //   {"color":"blue", "shape":"hexagon", "liked":false},
    //   {"color":"red", "shape":"hexagon", "liked":false},
    //   {"color":"yellow", "shape":"hexagon", "liked":true},
    //   {"color":"yellow", "shape":"circle", "liked":true}
    // ];

    // var class_name = "liked";

    // // set up features to be used by decision tree
    // var features = ["color", "shape"];

    // var dt = new DecisionTree(training_data, class_name, features);
    
    // var predicted_class = dt.predict({
    //   color: "blue",
    //   shape: "hexagon"
    // });

    // var accuracy = dt.evaluate(test_data);

    // var treeModel = dt.toJSON();
    
    // console.log(accuracy);
    // console.log(predicted_class);

    res.send('hello world');
  });
};