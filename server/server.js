const express = require('express');
const cors = require('cors');

const oxfordDictionariesApi = require('./oxfordDictionariesApi');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/entries/:word', async (req, res) => {
  const word = req.params.word;
  const response = await oxfordDictionariesApi.getEntries(word);
  res.json(response);
});

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
