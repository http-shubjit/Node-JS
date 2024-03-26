const express = require("express");
const json = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8000;

//middleware for post method
app.use(express.urlencoded({ extended: false }));

//*Routes *//

app.get("/", (req, res) => {
  res.send("Hello Users Its Home Page");
});

// for web browser send in the form of html
app.get("/users", (req, res) => {
  const html = json.map((user) => `<li>${user.first_name}</li>`).join("");
  res.send(html);
});

//send data to client in the form of json
app.get("/api/users", (req, res) => {
  return res.send(json);
});
app.post("/api/users", (req, res) => {
  const body = req.body; //fetch the value which is get from frontend
  json.push({ ...body, id: json.length + 1 }); //push the value in json data
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(json), (err, data) => {
    return res.send({ status: "success", id: json.length });
  });
});

// app.get("/api/users/:id", (req, res) => {
//   const userid = Number(req.params.id);

//   const write = `id: ${userid} \n`;
//   fs.appendFile("userid.txt", write, (err) => {
//     if (err) {
//       console.error("Error writing to userid.txt:" + err);
//     } else {
//       console.log("User ID logged to userid.txt :" + userid);
//     }
//   });
//   const finduser = json.find((user) => user.id === userid);
//   res.send(finduser);
// });

// app.patch("/api/users/:id", (req, res) => {
// //for get the id for manipulate
//   const id = req.params.id;
//   //TODO:Edit user By The help of id
//   return res.json({ status: "pending" });
// });

// app.delete("/api/users/:id", (req, res) => {
//   //TODO:delete The User
//   return res.json({ status: "pending" });
// });

// // We can do The above code with a single route
app
  .route("/api/users/:id")
  .get((req, res) => {
    const userid = Number(req.params.id);
    const finduser = json.find((user) => user.id === userid);
    res.send(finduser);
  })
  .put((req, res) => {
    const id = Number(req.params.id);
    const find = json.find((user) => user.id === id);
    find.first_name = req.body.first_name;
    find.last_name = req.body.last_name;
    find.email = req.body.email;
    find.gender = req.body.gender;
    res.send(find);
  })
  .patch((req, res) => {
    const find = json.find((user) => user.id === Number(req.params.id));
    find.email = req.body.email;
    res.send(find);
  })
  .delete((req, res) => {
    const indexToDelete = json.find(
      (user) => user.id === Number(req.params.id)
    );
    console.log(indexToDelete);
    const deletedUser = json.splice(indexToDelete, 1);

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(json), (err, data) => {
      if (indexToDelete !== -1) {
        res.send({ message: "User deleted successfully", deletedUser });
      } else {
        res.status(404).send({ message: "User not found" });
      }
    });
  });

app.listen(PORT, () => {
  console.log("Server Started...");
});
