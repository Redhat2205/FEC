const express = require('express');
require('dotenv').config();
const path = require('path');
const helpers = require('./helpers');

const app = express();

// serving static files
app.use(express.static(path.join(__dirname, "../Client/public")));
app.use(express.json());

app.get('/products/:id', (req, res) => {
  helpers.getProduct(req, res);
});

app.get('/reviews/:id', (req, res) => {
  helpers.getReviews(req, res);
});

app.get('/products/:id/styles', (req, res) => {
  helpers.getStyles(req, res);
});
// listening
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on PORT', port);
});
