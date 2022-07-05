const express = require('express');

const app = express();

const grades = {};

app.get('/api/grades', function (req, res) {
  const temp = [];
  for (const x in grades) {
    temp.push(grades[x]);
  }
  res.send(temp);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.use(express.json());

let nextId = 1;

app.post('/api/grades', function (req, res) {
  const newGrade = req.body;
  const id = nextId;
  newGrade.id = id;
  grades[id] = newGrade;

  res.status(201).end();
  nextId++;
});
