const fs = require("fs");

const os = require("os");
// // fs.writeFileSync("first.txt", "hello world and i am raka");

// **snchronious- blocking call// It wait for the file to be read

// console.log("first");

// const res = fs.readFileSync("./first.txt", "utf-8");
// console.log(res);
// console.log("end");

//* Asynchronious:Non Blocking*// do not wait for the file to be readable

// console.log("first");
// fs.readFile("./first.txt", "utf-8", (err, res) => {
//   console.log(res);
// });
// console.log("end");

console.log(os.cpus().length);
