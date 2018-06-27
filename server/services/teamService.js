const teamsData = [
  {"id":76, "abbreviation": "ARI", "name": "Arizona, Cardinals"},
  {"id":68, "abbreviation": "ATL", "name": "Atlanta, Falcons"},
  {"id":56, "abbreviation": "BAL", "name": "Baltimore, Ravens"},
  {"id":48, "abbreviation": "BUF", "name": "Buffalo Bills"},
  {"id":69, "abbreviation": "CAR", "name": "Carolina, Panthers"},
  {"id":60, "abbreviation": "CHI", "name": "Chicago, Bears"},
  {"id":57, "abbreviation": "CIN", "name": "Cincinatti, Bengals"},
  {"id":58, "abbreviation": "CLE", "name": "Clevland, Browns"},
  {"id":52, "abbreviation": "DAL", "name": "Dallas, Cowboys"},
  {"id":72, "abbreviation": "DEN", "name": "Denver, Broncos"},
  {"id":61, "abbreviation": "DET", "name": "Detroit, Lions"},
  {"id":62, "abbreviation": "GB", "name": "Green Bay, Packers"},
  {"id":64, "abbreviation": "HOU", "name": "Houston, Texans"},
  {"id":65, "abbreviation": "IND", "name": "Indianapolis, Colts"},
  {"id":66, "abbreviation": "JAX", "name": "Jacksonville, Jaguars"},
  {"id":73, "abbreviation": "KC", "name": "Kansas City, Chiefs"},
  {"id":75, "abbreviation": "LAC", "name": "Los Angeles, Chargers"},
  {"id":77, "abbreviation": "LA", "name": "Los Angeles, Rams"},
  {"id":49, "abbreviation": "MIA", "name": "Miami, Dolphins"},
  {"id":63, "abbreviation": "MIN", "name": "Minnesota, Vikings"},
  {"id":50, "abbreviation": "NE", "name": "New England, Patriots"},
  {"id":70, "abbreviation": "NO", "name": "New Orleans, Saints"},
  {"id":53, "abbreviation": "NYG", "name": "New York, Giants"},
  {"id":51, "abbreviation": "NYJ", "name": "New York, Jets"},
  {"id":74, "abbreviation": "OAK", "name": "Oakland, Raiders"},
  {"id":54, "abbreviation": "PHI", "name": "Philadelphia, Eagles"},
  {"id":59, "abbreviation": "PIT", "name": "Pittsburg, Steelers"},
  {"id":78, "abbreviation": "SF", "name": "San Francisco, 49ers"},
  {"id":79, "abbreviation": "SEA", "name": "Seattle, Seahawks"},
  {"id":71, "abbreviation": "TB", "name": "Tampa Bay, Buccaneers"},
  {"id":67, "abbreviation": "TEN", "name": "Tennessee, Titans"},
  {"id":55, "abbreviation": "WAS", "name": "Washington, Redskins"}
];

const teamAbbrService = {
  getTeamById: function (id) {
    for (let i = 0; i < teamsData.length; i++) {      
      if (teamsData[i].id === parseInt(id)) {
        return teamsData[i];
      }
    }
  },
  
  getTeamByAbbr: function (abbr) {
    for (let i = 0; i < teamsData.length; i++) {
      if (teamsData[i].abbreviation === abbr) {
        return teamsData[i];
      }
    }
  },

  getAllTeamAbbrs: function () {
    return teamsData;
  }
};

module.exports = teamAbbrService;