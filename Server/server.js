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

app.get('/questions/:id', (req, res) => {
  helpers.getQA(req, res);
});
app.put('/report/questions/:id', (req, res) => {
  helpers.reportQuestion(req, res);
});
app.put('/report/answers/:id', (req, res) => {
  helpers.reportAnswer(req, res);
});
app.put('/helpful/questions/:id', (req, res) => {
  helpers.helpfulQuestion(req, res);
});
app.put('/helpful/answers/:id', (req, res) => {
  helpers.helpfulAnswer(req, res);
});
app.post('/answers/submit/:id', (req, res) => {
  helpers.submitAnswer(req, res);
});
app.post('/questions/submit/', (req, res) => {
  helpers.submitQuestion(req, res);
});

app.get('/products/:id/styles', (req, res) => {
  helpers.getStyles(req, res);
});
// listening
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on PORT', port);
});
