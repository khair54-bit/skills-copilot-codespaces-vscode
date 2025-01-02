// create web server
// run node comments.js
// open browser and go to http://localhost:3000/
// the server will respond with the comments.json file

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  fs.createReadStream(path.join(__dirname, 'comments.json')).pipe(response);
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});