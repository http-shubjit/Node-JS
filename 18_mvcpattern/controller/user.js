const User = require("../models/user");

async function handlegetAlluser(req, res) {
  const alluser = await User.find({});
  res.send(alluser);
}

async function handleCreateNewUser(req, res) {
  const body = req.body;

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
  res.status(201).json({ msg: "user created", name: result.first_name });
}

async function handlegetUserbyId(req, res) {
  const user = await User.findById(req.params.id);
  res.send(user);
}

async function handleUpdateuserbyId(req, res) {
  const user = await User.findByIdAndUpdate(req.params.id, {
    last_name: "changed",
  });
  res.send(user);
}

async function handleDeleteUserbyId(req, res) {
  const user = await User.findByIdAndDelete(req.params.id);
  res.send(user);
}

module.exports = {
  handlegetAlluser,
  handleCreateNewUser,
  handlegetUserbyId,
  handleUpdateuserbyId,
  handleDeleteUserbyId,
};
