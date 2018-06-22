module.exports = function (app) {
  app.get('/api/creds', (req, res) => {
    let creds =  Buffer.from(`${process.env.REST_API_USER}:${process.env.REST_API_PASS}`).toString('base64');
    res.send({"Authorization": `Basic ${creds}`});
  });
};