const express = require("express");
const json = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 3000;

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
  //TODO:create a new user
  return res.json({ status: "pending" });
});

app.get("/api/users/:id", (req, res) => {
  const userid = Number(req.params.id);

  const write = `id: ${userid} \n`;
  fs.appendFile("userid.txt", write, (err) => {
    if (err) {
      console.error("Error writing to userid.txt:" + err);
    } else {
      console.log("User ID logged to userid.txt :" + userid);
    }
  });
  const finduser = json.find((user) => user.id === userid);
  res.send(finduser);
});

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
// app
//   .route("/api/users/:id")
//   .get((req, res) => {
//     //TODO:Get The User respective to id
//     const userid = Number(req.params.id);
//     fs.writeFile("userid.txt", userid, (err) => {
//       if (err) {
//         console.error("Error writing to userid.txt:", err);
//       } else {
//         console.log("User ID logged to userid.txt");
//       }
//     });
//     const finduser = json.find((user) => user.id === userid);
//     console.log(finduser);
//     res.send(finduser);
//   })
//   .patch((req, res) => {
//     // for get the id for manipulate
//     const id = req.params.id;
//     //TODO:Edit user By The help of id
//     return res.json({ status: "pending" });
//   })
//   .delete((req, res) => {
//     //TODO:delete The User
//     return res.json({ status: "pending" });
//   });

app.listen(PORT, () => {
  console.log("Server Started...");
});
