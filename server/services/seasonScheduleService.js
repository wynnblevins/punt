const axios = require('axios');
const authValueService = require('./authValueService.js');

const seasonScheduleService = {
  getSeasonSchedule: function (seasonStr) {
    
    let sportsFeedUrl = `https://api.mysportsfeeds.com/v1.1/pull/nfl/${seasonStr}/full_game_schedule.json`;
    console.log('AUTH: ' + authValueService.getAuthValue());
    return axios({
      method: 'GET',
      url: sportsFeedUrl,
      headers: {
        'Authorization': authValueService.getAuthValue()
      }
    }).catch(function (thrown) {
      console.error(`Season schedule service threw an error:\n${thrown}`);
    });
  }
};

module.exports = seasonScheduleService;