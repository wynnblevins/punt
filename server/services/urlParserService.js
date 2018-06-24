const urlParserService = {
  getPosition: function(string, subString, index) {
    return string.split(subString, index).join(subString).length;
  },
};

module.exports = urlParserService;