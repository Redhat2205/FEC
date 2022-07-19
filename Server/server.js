const express = require('express');
require('dotenv').config();
const path = require('path');
const { getProduct, getReviews } = require('./helpers');

const app = express();

// serving static files
app.use(express.static(path.join(__dirname, "../Client/public")));
app.use(express.json());

app.get('/products/:id', (req, res) => {
  getProduct(req, res);
});

app.get('/reviews/:id', (req, res) => {
  getReviews(req, res);
});

// listening
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on PORT', port);
});
