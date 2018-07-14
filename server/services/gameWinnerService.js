const axios = require('axios');
const authValueService = require('./authValueService.js');

const gameWinnerService = {
  requestWinner: function (gameId, seasonStr) {
    let url = `https://api.mysportsfeeds.com/v1.2/pull/nfl/${seasonStr}/game_boxscore.json?gameid=${gameId}&teamstats=W,L,T,PF,PA&playerstats=QBRating,Att,Comp,Yds,TD`

    let promise = new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: url,
        headers: {
          'Authorization': authValueService.getAuthValue()
        }
      }).then((response)=>{
        resolve(response.data);
      }).catch((err) => {
        reject(err);
      });
    })

    return promise;
  }
}; 

module.exports = gameWinnerService;