const fs = require("fs");
const http = require("http");

http.createServer((req, res) => {
  let stream = fs.createReadStream("../Content/Big.txt", "utf8");

  stream.on("open", () => {
    stream.pipe();
  });

  stream.on("error", (err) => {
    console.log(err);
  });
});
