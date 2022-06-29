const fs = require('fs');

fs.readFile('/workspaces/rc0522-code-solutions/node-fs-readfile/dijkstra.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
