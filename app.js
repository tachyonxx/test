const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¾çÁ¤ÈÆ´ÔÀÇ Åð±Ù ½Ã°¢Àº 17½Ã 27ºÐÀÔ´Ï´Ù.');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})