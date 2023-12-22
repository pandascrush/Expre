const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Get All Files
  const homePage = fs.readFileSync("./Files/index.html");
  const homeStyle = fs.readFileSync("./Files/Style.css");
  const homeJs = fs.readFileSync("./Files/Script.js");

  const Url = req.url;

  if (Url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (Url == "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else if (Url == "/Style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyle);
    res.end();
  } else if (Url == "/Script.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeJs);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page Not found</h1>");
    res.end();
  }
});

server.listen(5000);
