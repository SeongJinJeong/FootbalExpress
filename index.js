const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
<<<<<<< HEAD
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
=======

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
>>>>>>> 12a0abc403ca73ce681d0e7dc3693de5b07bc4f0

app.get("/", (req, res) => {
  res.send("Fuck");
});

<<<<<<< HEAD
app.post("/loginPost", (req, res) => {
  console.log(req.body.id);
  res.send({
    test: "test",
  });
});

app.pos;
=======
app.post("/loginPost",(req,res)=>{
  console.log(req.body.data);

  res.set('Access-Control-Allow-Origin','*');
  res.status(200).json({
    msg : "Your Request is Successful"
  });
});
>>>>>>> 12a0abc403ca73ce681d0e7dc3693de5b07bc4f0

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Server is running on " + port + " Port");
});
