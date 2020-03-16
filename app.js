const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  // res.render('the fish knows');
  res.render('index', { title: 'Accueil' });
});

app.post('/party', (req, res) => {
  // console.log(req.body);
  // res.send('Post ok !');
  axios
  .post(`${process.env.API_URL}/party`, req.body)
  .then(({ data }) => console.log(data))
  .catch((err) => console.error(err));
});

app.get('/party/:id', (req, res) => {
  res.render('party', { title: 'Mon évènement' });
});

app.listen(process.env.PORT, () =>
  console.log(`Front app listening on port ${process.env.PORT}!`),
);