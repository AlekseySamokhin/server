const http = require("http");

const server = http.createServer((req, res) => {
  console.log(res);
});

server.listen(9999, "localhost", () => {
  console.log("listening for requests on port 3000");
});
