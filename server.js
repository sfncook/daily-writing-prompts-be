const express = require('express');

const app = express();

let myIp = 'MY IP NOT SET';

app.get('/myip', (req, res) => {
  res.status(200).send({
    success: 'true',
    myip: myIp,
  })
});

app.post('/myip', function (req, res) {
  console.log('post req.query.add:',req.query.add);
  myIp = req.query.add;
  res.send('myIp set to '+myIp, 200);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
