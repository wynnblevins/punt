const stringUtilsService = {
  getSubStrPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
  }
};

module.exports = stringUtilsService;