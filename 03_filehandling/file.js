const fs = require("fs");

// * Sync*//
// fs.writeFileSync("./file.txt", `${Date.now()}"Hello World, I am Node Sync"`);

//* Async*//
// fs.writeFile("./file.txt", "Hello World, I am Node Async", (err) => {});

// const result = fs.readFileSync("./readfile.txt", "utf-8");

// fs.cpSync("./file.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");

// fs.appendFileSync("./file.txt", `${Date.now()}"Hello World"`);
