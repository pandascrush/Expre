const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  fs.readFile("./index.html", function (err, data) {
    //   res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});

server.listen(5000, () => {
  console.log("Server listening on port is 5000......");
});
