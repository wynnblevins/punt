module.exports = {
  // function takes one season's (i.e. 2015-regular) worth of data
  parseAllRecYards: function(data) {
    let totalRecYds = 0;
    for (let i = 0; i < data.cumulativeplayerstats.playerstatsentry.length; i++) {
      let recYds = data.cumulativeplayerstats.playerstatsentry[i].stats.RecYards;
      if (recYds) {
        totalRecYds += parseInt(recYds['#text']);
      }
    }
    return totalRecYds;
  }
}

