const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('�����ƴ��� ��� �ð��� 17�� 27���Դϴ�.');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})