
const fs = require("fs");

fs.rmSync("dist", { recursive: true, force: true });
fs.mkdirSync("dist/src", { recursive: true });

fs.copyFileSync("index.html", "dist/index.html");
fs.copyFileSync("src/catalogue.js", "dist/src/catalogue.js");

console.log("Build successful!");
