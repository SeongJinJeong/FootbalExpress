const express = require("express");
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Fuck");
});

app.post("/loginPost",(req,res)=>{
  console.log(req.body);

  res.set('Access-Control-Allow-Origin','*');
  res.status(200).send({
    "msg" : "Your Request is Successful"
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Server is running on " + port + " Port");
});
