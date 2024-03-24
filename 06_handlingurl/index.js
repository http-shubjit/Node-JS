const http = require("http");
const fs = require("fs");
const url = require("url");

const myserver = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}:${req.url}:New Request \n`;
  const myurl = url.parse(req.url, true);
  console.log(myurl);
  fs.appendFile("file.txt", log, (err, data) => {});
  switch (myurl.pathname) {
    case "/":
      res.end("Hello From Home Pager and pathis" + myurl.path);
      break;
    case "/about":
      const qp = myurl.query.name;
      res.end(`hello ${qp} from About page and path =${myurl.path} `);
      break;
    default:
      res.end("404 Not Found");
  }
});
myserver.listen(8000, () => {
  console.log("my server listening");
});
