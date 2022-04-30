const http = require("http");

let requestCount = 0;

const server = http.createServer((req, res) => {
  requestCount++;
  res.write("HELLO EVERYBODY!!! " + requestCount);
  res.end();
});

server.listen(3003);
