const express = require('express');
const { average } = require('./lib');

const app = express();
app.use(express.json());

app.post('/average', (req, res) => {
  const values = req.body;
  res.status(200).json({ average: average(values) });
});

module.exports = app;