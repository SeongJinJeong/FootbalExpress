const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const LoginRouter = require("./Login/Login");
const RegisterRouter = require("./Login/Register");
const UserInfo = require("./UserInfo/CallUser");

app.use(express.json());
app.use(cors());

app.use("/login", LoginRouter);
app.use("/register", RegisterRouter);
app.use("/user", UserInfo);

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/", (req, res) => {
  res.send("Fuck");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Server is running on " + port + " Port");
});
