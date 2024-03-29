const mongooes = require("mongoose");

const userSchmea = new mongooes.Schema(
  {
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
  },
  { timeStamp: true }
);

const User = mongooes.model("User", userSchmea);

module.exports = User;
