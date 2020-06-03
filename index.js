const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Fuck");
});

app.post("/loginPost",(req,res)=>{
  console.log(req.body.data);

  res.set('Access-Control-Allow-Origin','*');
  res.status(200).json({
    msg : "Your Request is Successful"
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Server is running on " + port + " Port");
});
