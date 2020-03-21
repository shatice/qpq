const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(express.static('pwa'));

/***** Default redirection route *****/

app.get('/', function(req, res) {
  res.render('index', { title: 'Accueil' });
});

/***** Principal form | Create event *****/

app.post('/party', (req, res) => {
  axios
  .post(`${ process.env.API_URL }/party`, req.body)
  .then(({ data }) => res.redirect(`/party/${ data._id }`))
  .catch((err) => res.send(err));
});

app.get('/party/:id', (req, res) => {
  axios
  .get(`${ process.env.API_URL }/party/${ req.params.id }`)
  .then(({ data }) =>
    res.render('party', {
      party: data,
      title: data.name,
      url: `${ process.env.FRONT_URL }:${ process.env.PORT }/party/${ data._id }`
    }),
  )
  .catch((err) => console.warn(err));
});

/***** Form | Add item *****/

app.post('/party/:id/items', (req, res) => {
  axios
  .post(`${ process.env.API_URL }/party/${ req.params.id }/items`, req.body)
  .then(() => res.redirect(`/party/${ req.params.id }`))
  .catch((err) => res.send(err));
});

/***** Form | Delete item *****/

app.post('/party/:id/items/:idItem', (req, res) => {
  axios
  .delete(`${ process.env.API_URL }/party/${ req.params.id }/items/${ req.params.idItem }`, req.body)
  .then(() => res.redirect(`/party/${ req.params.id }`))
  .catch((err) => res.send(err));
});

/***** PORT listener *****/

app.listen(process.env.PORT, () =>
  console.log(`Front app listening on port ${ process.env.PORT }!`),
);