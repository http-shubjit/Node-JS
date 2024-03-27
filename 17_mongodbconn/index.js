const expres = require("express"); //import the expres module
const fs = require("fs");
const mongoose = require("mongoose"); //impoprt the  mongoes module

const app = expres(); // creates an instance of the Express
const PORT = 8000;

//Connection mongoes
mongoose
  .connect("mongodb://127.0.0.1:27017/youtube_tutorial-1")
  .then(() => {
    console.log("Mongo Db Connect..");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

//SCHEMA
const userSchmea = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  job_tittle: {
    type: String,
  },
});

const User = mongoose.model("User", userSchmea); //User is the Model Name

app.use(expres.urlencoded({ extended: false })); //middleware provide by express to encodded the url form data comes from frontend

app
  .route("/api/users")
  .post(async (req, res) => {
    const body = req.body;
    console.log(body);
    if (
      !body ||
      !body.first_name ||
      !body.last_name ||
      !body.email ||
      !body.gender ||
      !body.job_tittle
    ) {
      res.status(400).json({ msg: "all field are required" });
    }
    const result = await User.create({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      gender: body.gender,
      job_tittle: body.job_tittle,
    });
    res.status(201).json({ msg: "user created" });
  })
  .get(async (req, res) => {
    const alluser = await User.find({});
    const html = alluser.map((user) => `<li>${user.first_name}</li>`).join("");
    res.send(alluser);
  });

app
  .route("/api/users/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);
    res.send(user);
  })
  .patch(async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, {
      last_name: "changed",
    });
    res.send(user);
  })
  .delete(async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.send(user);
  });

app.listen(PORT, () => {
  console.log("server Started...");
});
