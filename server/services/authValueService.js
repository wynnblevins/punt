const authValueService = {
  getAuthValue: function () {
    let creds = Buffer.from(`wynnblevins:Nowuckinfurries3612`).toString('base64');
    let authValue = `Basic ${creds}`;
    return authValue;
  }
}

module.exports = authValueService;