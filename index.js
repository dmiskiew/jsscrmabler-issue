const http = require('http');
const fs = require('fs').promises;
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/decoded-source.js":
      fs.readFile(__dirname + "/decoded-source.js")
      .then(contents => {
          res.setHeader("Content-Type", "text/javascript");
          res.writeHead(200);
          res.end(contents);
      })
      break
      case "/encoded-source.js":
      fs.readFile(__dirname + "/encoded-source.js")
      .then(contents => {
          res.setHeader("Content-Type", "text/javascript");
          res.writeHead(200);
          res.end(contents);
      })
      break
      case "/jsscrambler.json":
      fs.readFile(__dirname + "/jsscrambler.json")
      .then(contents => {
          res.setHeader("Content-Type", "application/json");
          res.writeHead(200);
          res.end(contents);
      })
      break
    default:
      fs.readFile(__dirname + "/index.html")
      .then(contents => {
          res.setHeader("Content-Type", "text/html");
          res.writeHead(200);
          res.end(contents);
      })
  }
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
