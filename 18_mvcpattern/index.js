const expres = require("express");
const app = expres();

const useRouter = require("./routes/user");
const { connectMongodb } = require("./connection");
const { logReqRes } = require("./middleware");
const PORT = 8000;

//Connection mongoes
connectMongodb("mongodb://127.0.0.1:27017/youtube_tutorial-1");

app.use(expres.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));
app.use("/user", useRouter);
app.listen(PORT, () => {
  console.log("server Started...");
});
