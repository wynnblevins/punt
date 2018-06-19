module.exports = function (app, db) {
  app.get('/api/creds', (req, res) => {
    let creds =  Buffer.from(`${process.env.REST_API_USER}:${process.env.REST_API_PASS}`).toString('base64');
    console.log(creds);
    res.send({"Authorization": `Basic ${creds}`});
  });
};