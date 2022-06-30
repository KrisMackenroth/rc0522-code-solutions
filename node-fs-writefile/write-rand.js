
const fs = require('fs');

const data = Math.floor(Math.random() * 100);

const text = data.toString() + '\n';

fs.writeFile('random.txt', text, err => {
  if (err) {
    console.error(err);
  }
});
