const express = require('express');
const app = express();
const fs = require('fs');
const json = require('./data.json');

app.use(express.json());

app.get('/api/notes', function (req, res) {
  const temp = [];
  for (const x in json.notes) {
    temp.push(json.notes[x]);
  }
  res.status(200).send(temp);
});

app.get('/api/notes/:id', function (req, res) {
  const id = req.params.id;
  const num = Number(req.params.id);
  if (Number.isInteger(num) && num > 0) {
    if (!json.notes[id]) {
      const error = { error: `Cannot find Id of ${req.params.id}` };
      res.status(404).send(error);
    } else {
      res.status(200).send(json.notes[id]);
    }
  } else {
    const error = { error: 'Input is not a positive integer.' };
    res.status(400).send(error);
  }
});

app.post('/api/notes', function (req, res) {
  if (!req.body.content) {
    const error = { error: 'Content is a required field' };
    res.status(400).json(error);
  } else {
    const newNote = req.body;
    const id = json.nextId;
    newNote.id = id;
    json.notes[json.nextId] = newNote;
    json.nextId++;
    fs.writeFile('./data.json', JSON.stringify(json, null, 2), err => {
      const error = { error: 'An unexpected error occurred.' };
      if (err) res.status(500).json(error);
      else res.status(201).json(newNote);
    });
  }
});

app.delete('/api/notes/:id', function (req, res) {
  const id = req.params.id;
  const num = Number(req.params.id);
  if (Number.isInteger(num) && num > 0) {
    if (!json.notes[id]) {
      const error = { error: `Cannot find Id of ${req.params.id}` };
      res.status(404).send(error);
    } else {
      delete json.notes[id];
      fs.writeFile('./data.json', JSON.stringify(json, null, 2), err => {
        const error = { error: 'An unexpected error occurred.' };
        if (err) res.status(500).json(error);
        else res.status(204).send();
      });
    }
  } else {
    const error = { error: 'Input is not a positive integer.' };
    res.status(400).send(error);
  }
});

app.put('/api/notes/:id', function (req, res) {
  const id = req.params.id;
  const num = Number(req.params.id);
  if (Number.isInteger(num) && num > 0 && req.body.content) {
    if (!json.notes[id]) {
      const error = { error: `Cannot find Id of ${req.params.id}` };
      res.status(404).send(error);
    } else {
      const newNote = req.body;
      const id = json.notes[req.params.id].id;
      newNote.id = id;
      json.notes[id] = newNote;
      fs.writeFile('./data.json', JSON.stringify(json, null, 2), err => {
        if (err) {
          const error = { error: 'An unexpected error occurred.' };
          res.status(500).send(error);
        } else res.status(200).send(json.notes[id]);
      });
    }
  } else {
    const error = { error: 'Input is not a positive integer and content is a required field.' };
    res.status(400).json(error);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
