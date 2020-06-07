const express = require("express");
const router = express.Router();

const cors = require("cors");
const bodyParser = require("body-parser");

const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "Admin",
  password: "python8745",
  database: "Football",
});

con.connect();

router.use(express.json());
router.use(cors());

router.post("/loginPost", (req, res) => {
  console.log(req.body.data);

  res.set("Access-Control-Allow-Origin", "*");
  res.status(200).json({
    msg: "Your Request is Successful",
  });
});

module.exports = router;
