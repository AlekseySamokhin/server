const http = require("http");
const { resourceUsage } = require("process");

let requestCount = 0;

const server = http.createServer((req, res) => {
  requestCount++;
  switch (req.url) {
    case "/students":
      res.write("STUDENTS");
      break;
    case "/course":
      res.write("FRONT + BACK");
      break;
    default:
      res.write("404 NOT FOUND");
  }
  res.write(" HELLO EVERYBODY!!! " + requestCount);
  res.end();
});

server.listen(3003);
