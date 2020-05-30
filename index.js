const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Fuck");
});

app.pos;

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Server is running on " + port + " Port");
});
