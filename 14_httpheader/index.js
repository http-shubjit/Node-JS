const express = require("express");

const app = express();
const PORT = 8000;

//middleware for post method
app.use(express.urlencoded({ extended: false }));

//middleware 1
app.use((req, res, next) => {
  console.log("I am from Middleware 1");
  next();
});

app.get("/", (req, res) => {
  console.log(req.headers); //set this in post see here
  res.setHeader("x-myname", "shubajit biswal"); //custom header,use x for custom header
  res.send("Hello Users Its Home Page");
});

app.listen(PORT, () => {
  console.log("Server is running.....");
});
