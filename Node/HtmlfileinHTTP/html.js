const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url);
  // console.log(req.method);
  // res.writeHead(200,{ 'content-type' : "text/html"})
  // res.write('<h1>Hello World</h1>')
  // res.end()

  const homePage = fs.readFileSync("./index.html");

  const Url = req.url;

  if (Url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (Url == "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page Not found</h1>");
    res.end();
  }
});

server.listen(5000);
