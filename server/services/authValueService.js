const authValueService = {
  getAuthValue: function () {
    let creds = Buffer.from(`wynnblevins:${process.env.PASS}`).toString('base64');
    let authValue = `Basic ${creds}`;
    return authValue;
  }
}

module.exports = authValueService;