const http = require("http");
const fs = require("fs");

const myserver = http.createServer((req, res) => {
  const log = `${Date.now()} ${req.url}: New Request Receive\n`;
  fs.appendFile("./log.txt", log, (err, data) => {});

  switch (req.url) {
    case "/":
      res.end("Hello From Home Pager");
      break;
    case "/about":
      res.end("hello from About page");
      break;
    default:
      res.end("404 Not Found");
  }
});

myserver.listen(8000, () => {
  console.log("Server Started...");
});
