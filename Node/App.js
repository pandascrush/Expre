const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Get All Files
  const homePage = fs.readFileSync("./HtmlfileinHTTP/Files/index.html");
  const homeStyle = fs.readFileSync("./HtmlfileinHTTP/Files/Style.css");
  const homeJs = fs.readFileSync("./HtmlfileinHTTP/Files/Script.js");

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
