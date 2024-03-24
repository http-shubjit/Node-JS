const http = require("http");
const fs = require("fs");

const myserver = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}:${req.url}:New Request \n`;
  fs.appendFile("file.txt", log, (err, data) => {});
  switch (req.url) {
    case "/":
      res.end("Hello From Home Pager and pathis" + myurl.path);
      break;
    case "/signup":
      if (req.method === "GET") res.end("welcome to get");
      else if (req.method === "post") {
        //DB Query
        res.end("welcome to post");
      }

      break;
    default:
      res.end("404 Not Found");
  }
});
myserver.listen(8000, () => {
  console.log("my server listening");
});
