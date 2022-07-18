const express = require('express');

const path = require('path');

const app = express();

const temp = path.join(__dirname, 'public');

const test = express.static(temp);

app.use(test);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
