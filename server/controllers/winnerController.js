const bodyParser = require("body-parser");

module.exports = function (app) {
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());    
  
  app.get('/api/prediction', (req, res) => {
    console.log('inside prediction endpoint');
  });
};