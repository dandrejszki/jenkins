const express = require('express');

const app = express();

app.get('/', async (req, res) => {
  res.send('Landing page');
});
app.get('/hello', async (req, res) => {
  res.send('Hello World');
});

app.listen(4001, () => {
  console.log('Listening on 4001');
});
