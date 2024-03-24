// const http = require("http");

// function myserverhandler(req, res) {
//   if (req.url === "/favicon.ico") return res.end();
//   switch (req.url) {
//     case "/":
//       res.end("Hello From Home Pager and pathis" + myurl.path);
//       break;
//     case "/signup":
//       if (req.method === "GET") res.end("welcome to get");
//       else if (req.method === "post") {
//         //DB Query
//         res.end("welcome to post");
//       }
//       break;
//     default:
//       res.end("404 Not Found");
//   }
// }
// const myserver = http.createServer(myserverhandler);

// myserver.listen(3000, () => {
//   console.log("My Server listening");
// });

//* it is so confusing due to same type code repetation and we write the if else if code for each path so it is panic and if we handle queryparams or search param we need to import first */

//**by the express frame work **//
const http = require("http");
const express = require("express");
const app = express(); //handler function like myserverhandler function

app.get("/", (req, res) => {
  return res.send("home page");
});

app.get("/signup", (req, res) => {
  return res.send("signup page");
});

app.post("/signup", (req, res) => {
  return res.send("signup page");
});
// const myserver = http.createServer(app);
// myserver.listen(443);

app.listen(900, () => {
  console.log("server start");
});
