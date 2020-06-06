const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/", (req, res) => {
  res.send("Fuck");
});

app.post("/loginPost", (req, res) => {
  console.log(req.body.id);
  res.send({
    test: "test",
  });
});

app.pos;

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Server is running on " + port + " Port");
});
