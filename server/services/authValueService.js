const authValueService = {
  getAuthValue: function () {
    console.log(`cred string: ${process.env.PASS}`)
    let creds = Buffer.from(`wynnblevins:${process.env.PASS}`).toString('base64');
    let authValue = `Basic ${creds}`;
    console.log('AUTH VALUE: ' + authValue);
    return authValue;
  }
}

module.exports = authValueService;