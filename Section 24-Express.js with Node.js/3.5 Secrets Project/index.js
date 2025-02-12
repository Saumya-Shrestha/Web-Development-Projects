//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

var isAuthorised = false;
const correctPassword = "ILoveProgramming";

const app = express();
const port = 3000;

//app.use(express.urlencoded({ exteneded: true }));
app.use(bodyParser.urlencoded({ extended: true }));

function passwordChecker(req, res, next) {
  var password = req.body["password"];
  if (password === correctPassword) {
    isAuthorised = true;
  }
  console.log("Entered password: " + password);
  next();
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(passwordChecker);

app.post("/check", (req, res) => {
  if (isAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    console.log("Password Incorrect!");
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
