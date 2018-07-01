const authValueService = {
  getAuthValue: function () {
    let creds = Buffer.from(`wynnblevins:${process.env.PASS}`).toString('base64');
    let authValue = `Basic ${creds}`;
    console.log('AUTH VALUE: ' + authValue);
    return authValue;
  }
}

module.exports = authValueService;