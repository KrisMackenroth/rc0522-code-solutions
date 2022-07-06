const express = require('express');
const app = express();

app.use(function (req, res) {
  res.send('<p>some html</p>');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});