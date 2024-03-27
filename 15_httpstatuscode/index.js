const express = require("express");
const json = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8000;

//middleware for post method here we write urlencoded because we send data in the form of urlencoded in postman app
app.use(express.urlencoded({ extended: false }));

//*Routes *//

app.get("/", (req, res) => {
  res.send("Hello Users Its Home Page");
});

//send data to client in the form of json
app.get("/api/users", (req, res) => {
  return res.send(json);
});
app.post("/api/users", (req, res) => {
  const body = req.body; //fetch the value which is get from frontend

  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender
  ) {
    res.status(400).json({ msg: "all field are required" });
  }
  json.push({ ...body, id: json.length + 1 }); //push the value in json data
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(json), (err, data) => {
    return res.send({ status: "success", id: json.length });
  });
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const userid = Number(req.params.id);
    const finduser = json.find((user) => user.id === userid);
    return res.send(finduser);
  })
  .put((req, res) => {
    const id = Number(req.params.id);
    const find = json.find((user) => user.id === id);
    find.first_name = req.body.first_name;
    find.last_name = req.body.last_name;
    find.email = req.body.email;
    find.gender = req.body.gender;
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(json), (err, data) => {
      if (indexToDelete !== -1) {
        return res.send({ message: "User Modify successfully", find });
      } else {
        return res.status(404).send({ message: "User not found" });
      }
    });
    return res.send(find);
  })
  .patch((req, res) => {
    const find = json.find((user) => user.id === Number(req.params.id));
    find.email = req.body.email;
    return res.send(find);
  })
  .delete((req, res) => {
    const indexToDelete = json.findIndex(
      (user) => user.id === Number(req.params.id)
    );
    console.log(indexToDelete);
    const deletedUser = json.splice(indexToDelete, 1);

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(json), (err, data) => {
      if (indexToDelete !== -1) {
        return res.send({ message: "User deleted successfully", deletedUser });
      } else {
        return res.status(404).send({ message: "User not found" });
      }
    });
  });

app.listen(PORT, () => {
  console.log("Server Started...");
});
