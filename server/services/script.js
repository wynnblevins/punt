const predictionService = require('./predictionService');
let raiders = { id: 74, abbr: 'OAK' };
let chiefs = { id: 73, abbr: 'KC' }; 

// first parameter is team A, second is team B
predictionService.predict(chiefs, raiders).then((result) => {
  console.log(result);
});