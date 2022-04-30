const http = require("http");

const server = http.createServer((req, res) => {
  res.write("HELLO EVERYBODY!!!");
  res.end();
});

server.listen(3003);
