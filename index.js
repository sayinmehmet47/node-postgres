const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const links_model = require('./link_model.js');
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Access-Control-Allow-Headers'
  );
  next();
});

app.get('/', (req, res) => {
  links_model
    .getLinks()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('', (req, res) => {
  res.send('Hello World');
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
