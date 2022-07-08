const express = require('express');
require('dotenv').config();
const path = require('path');

const app = express();

// serving static files
app.use(express.static(path.join(__dirname, "../Client/public")));

// listening
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on PORT', port);
});
