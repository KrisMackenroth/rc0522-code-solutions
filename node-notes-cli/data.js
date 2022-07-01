const fs = require('fs');
const json = require('./data.json');
if (process.argv[2] === 'read') {
  for (const x in json.notes) {
    console.log(`${x}: ${json.notes[x]}`);
  }
}
if (process.argv[2] === 'create') {
  json.notes[json.nextId] = process.argv[3];
  json.nextId++;
  fs.writeFile('./data.json', JSON.stringify(json, null, 2), err => {
    if (err) throw err;
  });
}
if (process.argv[2] === 'update') {
  for (const x in json.notes) {
    if (x === process.argv[3]) {
      json.notes[x] = process.argv[4];
      fs.writeFile('./data.json', JSON.stringify(json, null, 2), err => {
        if (err) throw err;
      });
    }
  }
}
if (process.argv[2] === 'delete') {
  for (const x in json.notes) {
    if (x === process.argv[3]) {
      delete json.notes[x];
      fs.writeFile('./data.json', JSON.stringify(json, null, 2), err => {
        if (err) throw err;
      });
    }
  }
}
